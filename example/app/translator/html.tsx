import { Translator } from "react-translator";

export function HTMLTranslator() {
  return (
    <Translator>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Translator>
  );
}

const content = `<h2>Air Conditioning Compressor R&R</h2>
<h1>Removal</h1>
<p>
    Certain tools are required to discharge refrigerant circuit. These
    work procedures may only be performed by trained personnel.
</p>
<p>
    There are different versions depending on refrigerant (R134a or
    R1234yf).
</p>
<ol type="1">
    <li>Remove refrigerant lines from air conditioning compressor.</li>
    <li>If required, remove washer fluid reservoir.</li>
    <li>
    If guide hose is equipped, loosen hose clamps (1) and (2) and remove
    air guide hose,
    <div>
        <b>Fig. ACH19CAH00900266.</b>
    </div>
    </li>
    <li>
    After removing air duct hose, close open lines and connections with
    clean plugs from engine bung set tool No. VAS6122, or equivalent
    tool.
    </li>
    <li>Remove ribbed belt.</li>
    <li>
    Disconnect connector (2) from air conditioning compressor regulator
    valve N280,
    <div>
        <b>Fig. ACH19CAH00900267.</b>
    </div>
    </li>
    <li>
    Remove bolts in direction of arrows as indicated and remove air
    conditioning compressor (1),
    <div>
        <b>Fig. ACH19CAH00900267.</b>
    </div>
    </li>
</ol>
<h1>Installation</h1>
<p>Reverse procedure to install, note following:</p>
<p>
    Thoroughly clean contact surfaces on air conditioning compressor and
    bracket.
</p>
<p>
    Insert alignment sleeves (arrows) into air conditioning compressor,
    <div>
    <b>Fig. ACH19CAH00900268.</b>
    </div>
</p>

<p>
    Make sure alignment sleeves are seated correctly and contact surfaces
    are clean. Incorrectly installed alignment sleeves and dirty or
    damaged contact surfaces can cause alignment irregularities between
    air conditioning compressor and engine. Alignment irregularities over
    operating time cause damage to air conditioning compressor.
</p>
<p>
    If air conditioning compressor is replaced due to certain complaints
    (for example, internal damage), refrigerant circuit must be flushed.
</p>
<p>
    There is an unspecified amount of refrigerant oil in removed air
    conditioning compressor. Therefore observe information on replacing
    air conditioning compressor.
    <b>
    Caution: Risk of damaging air conditioning compressor. Refrigerant
    oil may accumulate in compression chamber of removed air
    conditioning compressor depending on how it was stored. Turn air
    conditioning compressor 10 times by hand before installing ribbed
    belt after installing a new air conditioning compressor or filling
    with fresh refrigerant oil in order to avoid damaging air
    conditioning compressor when using it for first time.
    </b>
</p>
<ol type="1">
    <li>Evacuate and charge refrigerant circuit.</li>
    <li>
    Start air conditioning system after charging refrigerant circuit.
    </li>
    <li>
    Inspect DTC memory and erase any displayed entries using vehicle
    diagnostic tester in <q>Guided Fault Finding</q> function.
    </li>
    <li>
    Read information for starting air conditioning system after
    installing air conditioning compressor.
    </li>
    <li>
    <b>Torque</b> compressor steel bolt to 25 Nm.,
    <div>
        <b>Fig. ACH19CAH00900267.</b>
    </div>
    </li>
    <li>
    <b>Torque</b> compressor aluminum bolt to 8 Nm., plus an additional
    180 degrees turn,
    <div>
        <b>Fig. ACH19CAH00900267.</b>
    </div>
    </li>
</ol>
<div>----</div>
<h2>ABS Control Module R&R</h2>
<h1>Removal</h1>
<p>
    <b>
    Caution: To prevent skin contact with brake fluid, wear chemical
    resistant protective gloves.
    </b>
</p>
<p>
    <b>
    Caution: Danger of damaging brake lines. Do not change bend shape.
    </b>
</p>
<p>
    By doing this, valves in brake master cylinder are closed and brake
    fluid reservoir does not run empty.
</p>
<ol type="1">
    <li>
    Insert VAG1869/2, or equivalent between brake pedal and driver seat.
    Press brake pedal 60 mm,
    <div>
        <b>Fig. BR19CAH009000380.</b>
    </div>
    </li>
    <li>
    Remove protective cap (3) from bleeder screw (1) on left front
    caliper,
    <div>
        <b>Fig. BR19CAH009000381.</b>
    </div>
    </li>
    <li>
    Connect bleeder bottle hose (2) as in illustration,
    <div>
        <b>Fig. BR19CAH009000381.</b>
    </div>
    </li>
    <li>Open bleeder screw to reduce pressure in brake system.</li>
    <li>Close bleeder screw and remove bleeder bottle.</li>
    <li>Repeat procedure on rear left brake caliper.</li>
    <li>Remove engine cover.</li>
    <li>Drain coolant.</li>
    <li>Remove air filter housing.</li>
    <li>
    Loosen hose clamp (10) and remove coolant hose,
    <div>
        <b>Fig. BR19CAH009000429.</b>
    </div>
    </li>
    <li>
    Lift clips (2), remove coolant hose from heater core for heater and
    move it to side,
    <div>
        <b>Fig. BR19CAH009000429.</b>
    </div>
    </li>
    <li>
    <b>Models equipped with heat shield version 1,</b> release retainer
    in direction of -arrow-, pull cover (1) off to left and remove it,
    <div>
        <b>Fig. BR19CAH009000382.</b>
    </div>
    </li>
    <li>
    <b>Models equipped with heat shield version 2,</b> remove nut (1),
    and remove bracket with lock washer (3). Remove heat shield (2),
    <div>
        <b>Fig. BR19CAH009000431.</b>
    </div>
    </li>
    <li>Remove wiring guide.</li>
    <li>
    Press securing clip down in direction of (arrow A),
    <div>
        <b>Fig. BR19CAH009000383.</b>
    </div>
    </li>
    <li>
    Disconnect connector in direction of (arrow B),
    <div>
        <b>Fig. BR19CAH009000383.</b>
    </div>
    </li>
    <li>
    Remove connector (1). Make sure that no brake fluid enters control
    module connector housing. This could lead to contact corrosion and
    thereby cause system to fail. Clean a dirty connector housing
    thoroughly with compressed air,
    <div>
        <b>Fig. BR19CAH009000383.</b>
    </div>
    </li>
    <li>
    To protect against escaping brake fluid, place enough lint-free
    cloths in area below hydraulic control unit.
    </li>
    <li>Mark brake lines on hydraulic control unit.</li>
    <li>
    Remove union bolts for brake lines in sequence (6) through (1) and
    push brake lines slightly to side,
    <div>
        <b>Fig. BR19CAH009000384.</b>
    </div>
    </li>
    <li>
    Immediately seal open connection points with clean plugs from
    assembly part set 5Q0 698 311, or equivalent.
    </li>
    <li>
    Pull hydraulic control unit (1) upward in direction of (arrow) and
    remove it,
    <div>
        <b>Fig. BR19CAH009000206.</b>
    </div>
    </li>
    <li>
    Should hydraulic control module be replaced, remove bolts in
    direction of arrows and remove mounting bracket (1),
    <div>
        <b>Fig. BR19CAH009000432.</b>
    </div>
    </li>
</ol>
<h1>Installation</h1>
<p>The hydraulic control unit must rest in all pins.</p>
<p>
    Do not remove sealing plugs at new hydraulic unit until corresponding
    brake line is about to be installed.
</p>
<p>
    If sealing plugs are removed too early, brake fluid can escape and
    unit may not be sufficiently filled or adequately bleed.
</p>
<p>
    When installing hydraulic control unit, make sure rubber buffer is not
    pushed out of bracket.
</p>
<ol type="1">
    <li>Reverse procedure to install.</li>
    <li>
    Push hydraulic control unit (1) with bracket into pins in engine
    compartment in direction of arrows,
    <div>
        <b>Fig. BR19CAH009000208.</b>
    </div>
    </li>
    <li>
    Identification of hydraulic unit. Hydraulic unit to primary piston
    circuit of master brake cylinder HZ2 (A),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Hydraulic unit to master cylinder secondary piston circuit HZ1 (B),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Hydraulic unit to right front brake caliper VR (1),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Hydraulic unit to left rear brake caliper HL (2),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Hydraulic unit to rear right brake caliper HR (3),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Hydraulic unit to left front brake caliper VL (4),
    <div>
        <b>Fig. BR19CAH009000388.</b>
    </div>
    </li>
    <li>
    Insert all brake lines into Anti-Lock Brake System (ABS) hydraulic
    unit N55 , install all union bolts by hand and tighten in sequence
    (1) through 6,
    <div>
        <b>Fig. BR19CAH009000384.</b>
    </div>
    </li>
    <li>Remove brake pedal actuator VAG1869/2, or equivalent.</li>
    <li>Bleed brake system.</li>
    <li>
    If ABS control module J104/ABS hydraulic unit N55 is being replaced,
    select <q>Replace,</q> function for ABS control module J104/ABS
    hydraulic Unit N55
    </li>
    <li>
    <b>Torque</b> hydraulic control unit bolts to 20 Nm.
    </li>
    <li>
    <b>Torque</b> brake line bolts to 14 Nm.
    </li>
</ol>
<div>==============</div>
<div>
    A Pillar Trim Panel Insert R&R Remove instrument panel side cover.
    Disconnect A-Pillar gap cover (1) using 3409, or equivalent in
    direction of arrows and remove, Fig. BPM19CAH00901460. Disconnect sill
    panel in front area from A-Pillar lower trim panel. Remove components
    on driver side, proceed as follows: Remove operating lever handle from
    rear lid latch. Remove lower A-Pillar trim bolt (2), Fig.
    BPM19CAH00901463. Disengage lower A-Pillar trim (1) from side sill and
    remove rearward in direction of arrow A, Fig. BPM19CAH00901463.
    Disengage and remove A-Pillar trim from pins arrow B on A-Pillar, Fig.
    BPM19CAH00901463. Reverse procedure to install. Torque bolt to 3 Nm.,
    Fig. BPM19CAH00901460.
</div>
<div>
    Noise Diagnosis A visual inspection must always be performed to
    confirm presence of aftermarket components, potential collision
    damage, or areas of concern. A noise produced by a vibration can be
    diagnosed in same manner as a vibration. A noise produced by wind,
    leaks, or vehicle turbulence requires use of special listening tools.
    When a vibration produces a noise, vibration can be transmitted from
    originator, through conductor, and on to reactor where noise is heard
    by customer. The noise is transferred directly from component to
    component. For example, if steering system (originator) is producing
    an abnormal vibration, suspension system (conductor) can transmit
    vibration to instrument panel (reactor) where a noticeable squeak is
    heard. To be able to isolate a noise to a specific system/component
    group, use one or more of following noise detection tools: Chassis
    ears, mechanics stethoscope, screwdriver, rubber hose, and a
    ultrasonic leak detector. Noises that are produced by wind,
    turbulence, and air leaks are independent from noises produced by
    moving components. The noise is not transferred directly from
    component to component. Once a symptom is classified as a noise
    concern, particular conditions under which noise occurs need to be
    identified. These conditions are identified and verified on road test.
    Detailed information from customer is key is duplicating and
    diagnosing a noise concern. Use of a customer interview sheet can
    assist in pinpointing origin of noise concern, Fig. GEN5130000055441.
    Refer to FigGEN5130000055443. for noise concern diagnostic flow chart.
    Perform a vehicle road test and duplicate noise concern. After
    identifying possible systems, a preliminary inspection of these
    systems should be done. If cause is identified at this stage, perform
    required repairs. If source of noise is unidentified, use a listening
    device such as a chassis ear to pinpoint source of noise. Once source
    of noise has been identified using a listening device, determine if
    this source is related to suspected system previously identified. If
    it is unrelated, then it is possible that source of noise is a reactor
    to a noise being transmitted through a transfer path. Common vehicle
    noises and applicable vehicle and component systems that can be
    affected are as follows: Grunt on acceleration: A raspy sound and
    momentary vibration in floor pan during acceleration or following a
    braking stop. Grunt on acceleration occurs on light trucks, and is an
    concern of driveline system. Vehicle speed range is 0-2 mph. Tip-in
    moan: A moan noise with a possible vibration in floor during light
    acceleration. It is usually worse at one particular throttle setting
    during acceleration at that speed. Common vehicle speeds range between
    25 and 50 mph. Tip-in moan is possible on all vehicle types, and is an
    concern of engine and exhaust systems. Brake moan: A low-pitch noise
    that is felt in floor and/or steering wheel during light brake
    application. Common vehicle speeds range between 8 and 40 mph. Brake
    moan is possible on all vehicle types and is an concern of brake
    system. Hum or boom: These are low-pitch noises often accompanied by a
    vibration felt in floor pan. Usually related to driveline angle or
    balance. It may or may not be torque related. Hum or boom occurs on
    all rear wheel drive vehicles and is an concern of driveline system.
    Howl: Howl is a medium-pitch noise that may be heard at any speed.
    Typically, it can be affected by acceleration or deceleration. Howl is
    possible on all vehicle types, and is an concern of drive axles.
    Whine: A high-pitch noise that may be heard at any speed. It is
    typically, but not always, unaffected by accelerating and
    decelerating. Whine is possible on all vehicle types, and is an
    concern of drive axles. Drive-line clunk: A loud noise that can be
    attributed to total powertrain response to torque reversals in system,
    including, but not limited to, backlash in transmission, driveshaft,
    and axle. Drive-line clunk is possible on all vehicle types, and is an
    concern of driveline system on rear wheel drive, or drive axles on
    front and rear wheel drive vehicles. Chuckle: Low-pitch noise that
    normally occurs while decelerating to a stop; pitch goes down as
    vehicle slows. When very loud, often described as a knock. Chuckle is
    possible on all vehicle types, and is an concern of drive axles.
    Rumble: Low-pitch noise that often is loudest during turns. Can
    usually be identified as front or rear in origin. Rumble is possible
    on all vehicle types, and is an concern of drive axles. Brake rattle:
    Noise of varying pitch that changes as brakes are applied or released.
    Brake rattle is possible on all vehicle types, and is an concern of
    brake system. Chatter: Pronounced noise that occurs only when turning.
    Chatter is possible on all rear wheel drive vehicles, and is an
    concern of drive axle.
</div>
<h2>Brake Fluid Type</h2>
<table>
    <tr>
    <th>Fluid Type</th>
    <th>Description</th>
    <th>Notes</th>
    </tr>
    <tr>
    <td>HBH</td>
    <td>Hydraulic Brake Fluid, DOT 4</td>
    <td>Hydraulic Brake Fluid, DOT 4 P/N B 000 750 M3 </td>
    </tr>
</table>

<h2>Brake Pad Minimum Thickness</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    <th>Notes</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>.079</td>
    <td>Inch</td>
    <td></td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>.276</td>
    <td>Inch</td>
    <td>Includes backing plate. </td>
    </tr>
</table>

<h2>Brake Rotor Discard Thickness</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>1.063</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>1.220</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>1.220</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>.866</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>.866</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>.315</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>.394</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>.787</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>.787</td>
    <td>Inch</td>
    </tr>
</table>

<h2>Brake Rotor Finish Depth</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>Not Specified by OEM</td>
    </tr>
</table>

<h2>Brake Rotor Maximum Parallel Variation</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>Not Specified by OEM</td>
    </tr>
</table>

<h2>Brake Rotor Minimum Machining Thickness</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>Not Specified by OEM</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>Not Specified by OEM</td>
    </tr>
</table>

<h2>Brake Rotor Nominal Thickness</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>1.181</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>1.339</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>1.339</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>.984</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>.984</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>.394</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>.472</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>.866</td>
    <td>Inch</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>.866</td>
    <td>Inch</td>
    </tr>
</table>

<h2>Brake Rotor Runout</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    <th>Notes</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LB, 1LC, 1LJ</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LH, 1LU</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LL, 1LN</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZA, 1ZD</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZE, 1ZP</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KE, 1KR</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KU, 2ED</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KX, 2EE</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1KY, 1KJ, 1KZ</td>
    <td>.0023</td>
    <td>Inch</td>
    <td>
        Measure the disc runout @ 10 mm (0.394) away from the outer edge
        on the vehicle; tighten lug nuts to specification.
    </td>
    </tr>
</table>

<h2>Caliper Bracket-to-Knuckle Tightening Torque</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    <th>Notes</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZF</td>
    <td>Not Specified by OEM</td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/O 1ZF</td>
    <td>148</td>
    <td>Foot-pound</td>
    <td>Rear. Tighten an additional 90 degrees. Replace bolts. </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1ZF</td>
    <td>63</td>
    <td>Foot-pound</td>
    <td>Rear. Tighten an additional 90 degrees. Replace bolts. </td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/O 1ZF</td>
    <td>63</td>
    <td>Foot-pound</td>
    <td>Rear. Tighten an additional 90 degrees. Replace bolts. </td>
    </tr>
</table>

<h2>Caliper-to-Caliper Bracket Tightening Torque</h2>
<table>
    <tr>
    <th>Position</th>
    <th>Qualifier</th>
    <th>Spec Value</th>
    <th>Unit of Measure</th>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1LC, 1LJ, 1ZA</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZD, 1ZE, 1ZP</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Front</td>
    <td>W/ 1ZF</td>
    <td>22</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1LC, 1LJ, 1ZA</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1LF, 1LH, 1LU</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1ZD, 1ZE, 1ZP</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
    <tr>
    <td>Rear</td>
    <td>W/ 1ZF</td>
    <td>26</td>
    <td>Foot-pound</td>
    </tr>
</table>`;
