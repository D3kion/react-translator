export interface BatchJob<Data = unknown, Result = unknown> {
  id: string;
  data: Data;
  resolve(value: Result | null): void;
}

export class Batcher<Data, Result> {
  private queue = new Array<BatchJob<Data, Result>>();
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private batchSize: number,
    private timeout: number,
    private generateId: (data: Data) => string,
    private handler: (payload: Data[]) => Promise<Result[]>
  ) {}

  add(data: Data): Promise<Result | null> {
    const id = this.generateId(data);
    const existing = this.queue.find((item) => item.id === id);

    if (existing) {
      return new Promise((resolve) => {
        existing.resolve = resolve;
      });
    }

    return new Promise((resolve) => {
      this.queue.push({ id, data, resolve });

      if (!this.timer) {
        this.timer = setTimeout(() => this.flush(), this.timeout);
      }

      if (this.queue.length >= this.batchSize) {
        this.flush();
      }
    });
  }

  private flush() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    while (this.queue.length > 0) {
      const group = this.queue.splice(0, this.batchSize);
      this.handler(group.map((x) => x.data)).then((result) => {
        group.forEach((job, idx) => job.resolve(result?.[idx] ?? null));
      });
    }
  }
}
