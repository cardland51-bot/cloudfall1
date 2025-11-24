// book.js

const BOOK_TITLE = "CLOUDFALL";
const BOOK_SUBTITLE = "A Rider’s Story After the Cloud";

const CHAPTERS = [
  {
    title: "Synopsis – Page 1",
    content: `
CLOUDFALL follows Eli Navarro, a quiet night-shift network engineer at Helios, the company that runs most of the world’s cloud. From a lone operations room in Yuma, Arizona, Eli watches graphs and dashboards that show how the planet is talking to itself. Where other people see numbers, he reads weather in the way the lines curve and twitch.

Years earlier, Eli wrote a smart-routing module that became part of the core Helios infrastructure. It automatically steers data along the cheapest, fastest paths and prefers Helios’s own fiber whenever it can. His work saves the company money and keeps their global cloud feeling smooth. Buried in the code is a small bias he added under pressure: keep traffic on Helios-owned paths as long as loss stays within a “tolerable” band. It was meant as a harmless optimization.

Running underneath the main cloud is the Continuity Initiative, a partly hidden project designed to keep critical services alive when things go wrong. On paper, Continuity looks like corporate resilience policy and disaster-planning jargon. In reality, it is a patchwork of older fibers, point-to-point links, and low-bandwidth routes quietly maintained by a handful of engineers who believe communication itself is worth protecting.
`
  },

  {
    title: "Synopsis – Page 2",
    content: `
On what begins as an ordinary night, Eli notices small bursts of packet loss on key backbone links feeding the western network. At first the errors look like noise, something a tired engineer could shrug off, but the pattern is wrong. The “weather” feels off. As he digs into traces and configs, he realizes his own routing logic is stubbornly keeping traffic on Helios’s internal paths as they degrade, refusing to fail over to cleaner external routes.

Alerts escalate. Other regions start to see similar instability. Video conferences stutter, payment systems time out, and some emergency systems begin to lag. In the global incident bridge, engineers from Seattle, Frankfurt, Dublin, and Yuma argue over possible causes, while Calder Hawkins, a veteran tied to the Continuity Initiative, tries to steer the response. Hawkins pushes Eli to strip out the risky override and restore conservative routing, but the deployment tools Eli needs depend on the very network that is now faltering.

The cloud does not collapse all at once. It sags, stutters, and drops in uneven waves across the world. Monitoring tools begin to fail. The incident bridge call dies mid-sentence. The dashboards Eli lives inside go black one by one. Outside the data center, the world stumbles into a strange new quiet where the invisible digital sky people rely on is suddenly torn open.
`
  },

  {
    title: "Synopsis – Page 3",
    content: `
In the hours and days that follow, the failure of the cloud exposes how much everyday life depended on a constant connection. Social feeds freeze, remote work tools vanish, and cloud-hosted records go dark. People can still talk in person, write things down, and move around, but there is no longer a smooth, always-on layer tying everything together. Eli is left with the knowledge that his clever shortcut helped push a fragile system over the edge.

At the same time, he carries something no one else does: an intimate mental map of Helios’s network and a half-formed understanding of Continuity. While executives focus on reassuring markets and restoring profitable services, Eli and a few scattered engineers begin to explore the leftover pieces of the Continuity Initiative. Behind unmarked doors and dusty panels, they find low-capacity links and forgotten paths that were built to survive disasters and then mostly ignored.

Using these remnants, they start stitching together a lean, slower network meant to carry essential messages: medical updates, emergency coordination, and simple notes between families cut off by the outage. Communities begin to rediscover local servers, small meshes, and shared machines. Hawkins, once the cautious voice on the incident call, quietly backs Eli’s efforts, trying to shield Continuity from being shut down or sold off.

By the time larger systems begin to recover in patches, something important has changed. The world has learned to live with a different kind of connectivity: less convenient, more deliberate, and rooted closer to home. CLOUDFALL ends with Eli as one of the anonymous riders keeping these new routes open, moving messages through a rebuilt, more human network in the space the old cloud left behind.
`
  },

  {
    title: "CHAPTER I – The Fall (Script, Page 1)",
    content: `
INT. HELIOS YUMA NOC – NIGHT.

Rows of server racks glow faintly beyond the glass, LEDs pulsing like a tired constellation. The operations room is mostly dark, lit by three large monitors and the ghost-blue spill of dashboards.

ELI NAVARRO, late twenties, hoodie and old conference T-shirt, sits alone at the main console. Empty energy drink cans ring his keyboard like a small, defeated fort.

On the central monitor, a WORLD MAP glows in soft blues and greens, each Helios region a halo of light. Below, lines of logs slide by in a narrow terminal window.

Eli leans forward, chin in his hand, eyes tracking graphs the way other people watch weather.

ELI quietly.

I did good.

He says it more to the graphs than to himself.

ON SCREEN, a routing efficiency widget shows clean, low-latency paths across the company’s private backbone. Small text in a config window reveals a comment.

hn_smart_route_v3 – EN.

Eli’s initials. A tiny signature no one is meant to notice.

He scrolls, almost idly, through metrics. CPU load. Packet loss. Region-to-region throughput. The curves are smooth tonight. Calm.
`
  },

  {
    title: "CHAPTER I – The Fall (Script, Page 2)",
    content: `
INT. HELIOS YUMA NOC – NIGHT – LATER.

The room hums with the steady breath of air handlers. Nothing changes. That is the point.

Eli types a quick status command into a terminal. Returns scroll up.

All nodes healthy.  
All paths available.  
All systems nominal.

He leans back, lets the chair squeak.

His PHONE buzzes, face-down on the desk. He eyes it for a long second, then flips it over.

A text from his sister.

u alive?

He smirks, thumbs a reply.

on shift

The typing bubbles appear, hover, then vanish. No new message.

Eli sets the phone down again, screen dark.

He clicks into the INCIDENT CHANNEL on his side monitor. Stale threads. A pinned runbook about certificates. Nothing that needs him.

Bored, he opens an INTERNAL WIKI tab and half-scrolls, eyes skipping over policy pages and arc diagrams. A title catches him.

CONTINUITY INITIATIVE – INTERNAL ONLY.

He has seen it before, always passed it by. Tonight, for no particular reason, he clicks.

The page is dense text. Mission statements. Phrases about end-to-end control of critical traffic and owning the line from endpoint to backbone. A small, buried note about how, in old disasters, the rescuers depended on whoever kept even a few lines open.

Eli scrolls.

Large sections are REDACTED, blocked out in gray bars. It looks theatrical. Helios loves its little secrets.

But lower down, in smaller font, a line stands out.

In the event of major regional failure, Continuity paths MUST preserve service first for hospitals, emergency response, small community networks, and essential civil infrastructure.

Underlined in the history by someone named HAWKINS.

Eli eyebrows it, impressed in spite of himself.

ELI.

Nice idea.

He does not say the other thought that arrives with it: anything promising to stay up when everything else falls is one bad assumption away from making the fall worse.
`
  },

  {
    title: "CHAPTER I – The Fall (Script, Page 3)",
    content: `
INT. HELIOS YUMA NOC – NIGHT – A LITTLE LATER.

The wiki tab closes. The world returns to graphs.

Eli’s eyes drift back to a panel on the left: WESTERN BACKBONE HEALTH. A small series of bars, all green.

He watches them more out of habit than concern. Sips from a lukewarm can, grimaces.

On the panel, one bar twitches from green to a faint yellow, then back.

Eli blinks.

He leans in, brings the panel full-screen.

Now the detail shows: a small, almost insignificant bump in PACKET LOSS on a handful of internal links between Yuma and the coast. The number ticks from 0.1% to 0.7%, then settles.

Tiny. Noise, usually.

ELI, under his breath.

Come on. What are you doing.

He calls up a TRACE. Routes appear in a neat list. YUMA to LA-CORE-3. LA-CORE-3 to BAY-CORE-2. Out to an exchange he has seen a hundred times.

Nothing obviously broken.

The loss graph nudges again. 0.9%. 1.3%.

Eli’s fingers dance over shortcuts. He opens a separate window, isolating just those links. The rest of the map stays calm blue. The problem, if it is a problem, is contained in this little patch of network weather.

He flips to the INCIDENT CHANNEL and types.

eli.n: anyone seeing weird flaps on west backbone?

He sends it and waits.

One reply from SEATTLE.

sea-noc: tiny bump earlier, assumed upstream. quiet now.

PHOENIX checks in.

phx-edge: edge looks clean. maybe transient?

Eli glances back at his own panel. The bar rises to 2.1%. Hovers. Slides to 2.6%.

Not catastrophic. Not nothing.
`
  },

  {
    title: "CHAPTER I – The Fall (Script, Page 4)",
    content: `
INT. HELIOS YUMA NOC – NIGHT – CONTINUOUS.

Eli opens the CONFIG driving those links. Lines of routing logic scroll into view.

He finds the section he wrote months ago, the one with his initials.

Temporary bias: prefer internal path while loss remains within tolerable band.

The comment is simple. Reasonable, on its face.

ELI, muttering.

You behaved fine yesterday.

He checks the threshold. The band is narrow. A bruise, not a break. That was the theory. It is still defensible, in theory.

On the main monitor, the overall world map still looks fine. GLOBAL ERROR: 0.03%. A number so small most people would never even see it.

On his local panel, the western links pulse with quiet insistence.

3.0%. Back to 2.4%. Little bursts, clustered like someone tapping the line with a finger.

The CONFERENCE BRIDGE button hovers in the corner of his screen, waiting for an escalation he is not sure he is justified in making.

Eli hesitates, then hits it.

The speakers crackle to life as the bridge spins up. Icons appear along the bottom of the screen as other locations join.

VOICE, FILTERED, SEATTLE.

Seattle on.

VOICE, DUBLIN.

Dublin here.

Eli unmutes.

ELI.

Yuma on. I’ve got persistent loss on west backbone, looks internal. Small but weird.

He brings the WESTERN PANEL into the screen share. The others see what he sees: a neat world map still largely calm, with one corner starting to misbehave.
`
  },

  {
    title: "CHAPTER I – The Fall (Script, Page 5)",
    content: `
INT. HELIOS YUMA NOC – NIGHT – BRIDGE CALL.

The voices on the line align with little icons.

SEATTLE ENGINEER.

Might just be a noisy optic, man.

DUBLIN ENGINEER.

Or someone flapping a peer. Seen worse.

Eli shakes his head, already pulling more logs.

ELI.

It’s clustered. Not random. And smart_route is holding traffic on those links instead of failing over.

He highlights the section of code on his screen share, the small comment about temporary bias.

DUBLIN ENGINEER.

That yours?

ELI.

Yeah.

A beat.

SEATTLE ENGINEER.

What’s the band?

ELI.

Five percent. It is supposed to switch out if loss goes above that.

He tries to sound confident. The knot in his stomach tightens anyway.

On the panel, the bar ticks to 3.4%, wavers, drops to 2.9%. The changes are small, but the shape of the graph bothers him. It feels like a warning curve.

Another icon lights up on the bridge. A new voice joins. Steady, older.

HAWKINS.

Security, Continuity. Hawkins here. Evening.

Eli recognizes the name from the wiki page history.

HAWKINS, CONT’D.

Walk me through what you are seeing, Navarro.

Eli glances at the name tag on the call. So Hawkins does know who wrote what.

ELI.

West backbone, small persistent loss. My module is keeping traffic on the internal fabric instead of pushing it to external carriers. It should start preferring the cleaner path any minute.

He wants that to be true. He waits for the graph to prove him right.

The line on his screen twitches upward instead.

3.8%.

Eli’s mouth goes dry.

On the other end of the bridge, someone types rapidly. Hawkins’s voice stays even.

HAWKINS.

Understood. For now, we assume we are still in the warning stage. No one panic. Navarro, keep eyes on those links. If your bias does not let go when it should, we adjust. That is why we have you on nights, yes?

There is almost a hint of dry humor in it.

Eli nods, even though no one can see him.

ELI.

Yeah. I am on it.

He leans closer to the screens until his reflection disappears and there is only the light.

For the first time all shift, Eli stops treating the graphs as something to admire and starts treating them as something that can bite.
`
  }
];
