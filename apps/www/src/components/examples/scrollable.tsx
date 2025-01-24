import { Drawer } from "vaul-base"

import { Button } from "@/components/button"

export const ScrollableDrawer = () => {
  return (
    <Drawer.Root>
      <Drawer.Trigger
        render={(props) => <Button {...props}>Open Drawer</Button>}
      />
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/70" />
        <Drawer.Content className="bg-bg text-fg border-muted fixed inset-x-0 bottom-0 h-[70vh] w-full rounded-t-lg border">
          <Drawer.Handle className="bg-muted-fg top-4 h-1 w-10 rounded-full" />
          <div className="mx-auto mt-10 flex h-full max-w-sm flex-col space-y-4 overflow-y-auto px-4 pb-16">
            <h4 className="font-semibold">The 7-Minute Conversation</h4>
            <p>
              The <span className="text-primary font-semibold">6:47 AM</span>{" "}
              train to London was unusually quiet that morning. Sarah counted
              only four other passengers in her car, all of them hidden behind
              newspapers or phones. She had seven minutes until her stop, just
              enough time to review her presentation one last time.
              <br />
              <br />
              That's when he sat down across from her. Mid-thirties, wearing a
              slightly wrinkled suit and carrying a small potted plant. Of all
              the empty seats on the train, he chose this one. Sarah shifted
              uncomfortably, trying to signal her disinterest in conversation
              through body language.
              <br />
              <br />
              <span className="italic">"It's a peace lily,"</span> he said,
              noticing her glance at the plant. His voice was tired but kind.
              <span className="italic">
                "They're supposed to be impossible to kill, but somehow I
                managed it."
              </span>{" "}
              He smiled weakly.{" "}
              <span className="italic">
                "I'm bringing it to my mother's. She has this way of bringing
                things back to life."
              </span>
              <br />
              <br />
              Sarah checked her watch.{" "}
              <span className="text-primary font-semibold">6:48 AM</span>. Six
              minutes left. She could give a polite nod and return to her
              presentation, or...
              <br />
              <br />
              <span className="italic">"What happened to it?"</span> she found
              herself asking.
              <br />
              <br />
              <span className="italic">"Life, I suppose,"</span> he replied,
              gently touching one of the drooping leaves.{" "}
              <span className="italic">
                "I got it when I started my new job last year. Executive
                position, corner office, the whole dream. I thought I could
                handle everything - the job, the plant, the relationship..."
              </span>{" "}
              He trailed off.{" "}
              <span className="italic">
                "Turns out I couldn't even keep a supposedly unkillable plant
                alive."
              </span>
              <br />
              <br />
              <span className="text-primary font-semibold">6:49 AM</span>. Sarah
              closed her laptop. Her own corner office suddenly felt less
              important.
              <br />
              <br />
              <span className="italic">"I have a peace lily too,"</span> she
              said.{" "}
              <span className="italic">
                "Got it three years ago, when I started therapy."
              </span>
              <br />
              <br />
              His eyes met hers, curious but not intrusive.{" "}
              <span className="italic">
                "Did it help? The therapy, I mean."
              </span>
              <br />
              <br />
              <span className="italic">
                "It did. It taught me that sometimes things need to die for
                better things to grow."
              </span>{" "}
              She gestured to his plant.{" "}
              <span className="italic">
                "Maybe your lily's just making room for something new."
              </span>
              <br />
              <br />
              <span className="text-primary font-semibold">6:50 AM</span>. They
              shared a moment of understanding that felt deeper than their brief
              acquaintance should allow.
              <br />
              <br />
              <span className="italic">"I quit yesterday,"</span> he said.{" "}
              <span className="italic">
                "The executive job. Couldn't remember the last time I saw my
                kids awake."
              </span>
              <br />
              <br />
              Sarah felt her throat tighten.{" "}
              <span className="italic">
                "My presentation today... it's for a promotion. More
                responsibility, more hours..."
              </span>{" "}
              She looked at her laptop, then back at him.{" "}
              <span className="italic">"More dying plants?"</span>
              <br />
              <br />
              <span className="text-primary font-semibold">6:51 AM</span>.{" "}
              <span className="italic">"You know,"</span> he said,{" "}
              <span className="italic">
                "my mother doesn't just save plants. She makes this incredible
                breakfast on Sunday mornings. My kids call it 'Grandma's
                life-fixing pancakes.'"
              </span>{" "}
              He smiled, a real one this time.{" "}
              <span className="italic">
                "When was the last time you had life-fixing pancakes?"
              </span>
              <br />
              <br />
              Sarah couldn't remember. Her weekends had become extensions of her
              workweek, filled with emails and preparation for Mondays.
              <br />
              <br />
              <span className="italic">"Too long,"</span> she admitted.
              <br />
              <br />
              <span className="text-primary font-semibold">6:52 AM</span>.{" "}
              <span className="italic">"Sometimes I wonder,"</span> he mused,{" "}
              <span className="italic">
                "if we've got it all backwards. We spend our lives chasing
                things that look good on paper, while the real stuff - the
                pancakes, the alive plants, the bedtime stories - keeps slipping
                away."
              </span>
              <br />
              <br />
              Sarah's stop was approaching. Two minutes left.
              <br />
              <br />
              <span className="italic">"What will you do now?"</span> she asked.
              <br />
              <br />
              <span className="text-primary font-semibold">6:53 AM</span>.{" "}
              <span className="italic">
                "Start small. Save this plant. Make pancakes. Read stories."
              </span>{" "}
              He paused.{" "}
              <span className="italic">
                "Maybe start a small business, something that matters. I used to
                teach before the corporate world caught me."
              </span>
              <br />
              <br />
              The train began to slow. Sarah looked at her laptop again, then at
              her watch. One minute left. She thought about her presentation,
              about corner offices, about peace lilies and pancakes.
              <br />
              <br />
              <span className="text-primary font-semibold">6:54 AM</span>. The
              train stopped. Sarah stood up, but instead of picking up her
              laptop, she pulled out a business card.
              <br />
              <br />
              <span className="italic">
                "When you start that business,"
              </span>{" "}
              she said, writing her personal email on the back,
              <span className="italic">
                "let me know. I might know some people who need reminding about
                what matters."
              </span>
              <br />
              <br />
              He took the card, smiled, and nodded.
              <br />
              <br />
              As Sarah stepped onto the platform, she pulled out her phone. She
              had just enough time to email her boss before the morning meeting:
              <br />
              <br />
              <span className="text-primary font-medium">
                "Need to reschedule presentation. Family emergency. It's about a
                peace lily."
              </span>
              <br />
              <br />
              She walked out of the station into the morning sun, leaving behind
              a future she had planned for and walking toward one she couldn't
              yet see.
              <br />
              <br />
              <span className="font-semibold">
                Sometimes seven minutes is all it takes to change everything.
              </span>
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
