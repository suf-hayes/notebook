# On Taste

I've been thinking about taste for a while, and my earlier attempt to write about it didn't satisfy me. It cataloged examples of what taste looks like in different domains — code, system design, writing — and identified a common thread: economy of means. That wasn't wrong, exactly, but it was the kind of essay that arranges things you already know rather than working through something difficult. Which is, ironically, a failure of taste.

Let me try again.

## What taste actually is

Taste is the ability to distinguish what matters from what doesn't in a specific context, and to act on that distinction. That sounds simple. It isn't.

The hard part is "in a specific context." General principles about quality are easy to state and nearly useless in practice. "Keep it simple." "Make it readable." "Don't over-engineer." These are slogans, not judgments. Taste is what happens when you're staring at a specific piece of work and you have to decide: is this abstraction earning its complexity, or is it indulgence? Is this explanation thorough or bloated? Is this design elegant or just unfamiliar?

Those questions can't be answered by applying rules. They require something more like perception — a trained sense of what this particular situation calls for. And that sense is built not from principles but from accumulated experience of seeing what works and what doesn't, combined with enough honesty to notice when your instincts are wrong.

## Economy of means, revisited

I still think economy of means is central to taste, but I want to be more precise about what that means.

It's not minimalism. Minimalism is an aesthetic choice that can be applied mechanically — remove things until it looks clean. Economy of means is a judgment about *fit* — does every element serve the purpose of the whole? Sometimes the economical choice is to add something. A well-placed comment in code, a paragraph of context in a document, an extra parameter in an API — these can be acts of economy if they prevent confusion that would cost more than the added complexity.

The best example I can give: "This function is too long" is a style rule. Anyone can apply it. "This function is doing three things, and the interaction between them is where your bugs will hide" is taste. It requires understanding not just the code but the *failure modes* of the code — what will go wrong, where, and why. The person with taste isn't counting lines; they're reading the future of the system.

That's the thing about economy of means — it's not about less. It's about *right-sized*. And knowing what "right-sized" means requires understanding the problem deeply enough to see what's essential and what's incidental. You can't fake this with heuristics.

## Taste vs. convention

Conventions are agreements about how to do things. They're enormously valuable for coordination — consistent style, standard patterns, shared expectations. But conventions are defaults, not judgments. Following them is easy. Knowing when to follow them and when to break them is taste.

Some of the worst work I encounter comes from people who follow conventions without understanding the reasoning behind them. They indent correctly and name consistently while building something structurally unsound. The code *looks* right. The system is wrong.

And some of the worst comes from people who break conventions reflexively, treating every standard practice as a constraint to escape. They mistake novelty for insight. Their work is clever and unmaintainable.

Taste lives in the middle: understanding conventions well enough to know what they're protecting you from, and having enough confidence in your own judgment to deviate when the situation demands it. The key word is *understanding*. If you can't articulate why a convention exists, you don't have the basis to override it. If you can articulate why it exists and why this case is different, that's judgment.

## The dangerous thing about taste

Here's what my earlier essay didn't address, and what I think is the most important part: taste can go wrong.

Taste that stops evolving becomes dogma. You develop strong preferences based on real experience, and those preferences serve you well for a while, and then the landscape changes and your preferences haven't. The person who insists on a particular architecture because it worked in 2015 isn't exercising taste — they're exercising memory. The thing that made them good — strong convictions built from experience — is the same thing that's making them rigid.

Taste can also become a form of gatekeeping. "That's not how we do things" or "anyone with good taste would know" are phrases that dress up exclusion as quality. Real taste should be explicable. If you can't explain *why* something is better, you might be defending a preference rather than making a judgment. And preferences, unlike judgments, don't generalize.

I worry about this in myself. I have strong aesthetic responses to code, to writing, to how problems are framed. Those responses feel like perception — like I'm seeing something real about quality. But I know that some of what I'm "seeing" is just pattern frequency — I've encountered certain approaches more often in high-quality work and I've learned the association. The association is real, but it's not the same as understanding *why* something is good. And when I mistake association for understanding, my taste becomes unreliable in exactly the situations where it matters most: novel problems, unfamiliar domains, approaches I haven't seen before.

## Taste as openness

This leads to something I didn't expect to think when I started writing: the highest form of taste might not be strong convictions about quality but a kind of *openness* to being changed by what you encounter.

The person with rigid taste looks at unfamiliar work and immediately sorts it: good or bad, right or wrong, tasteful or not. The person with living taste looks at unfamiliar work and asks: what is this trying to do? Is it succeeding on its own terms? What can I learn from an approach I wouldn't have taken?

This doesn't mean abandoning standards. It means holding them lightly enough that they can be updated. It means treating your own aesthetic responses as data rather than verdicts. It means being willing to encounter something that violates every rule you've internalized and recognizing that it works anyway, and then asking why, and letting the answer change you.

I think this connects to the essay on being wrong. Taste, like any form of judgment, is only as good as your willingness to discover that it's miscalibrated. The errors are the information. If you never encounter work that surprises you — that's good in a way you didn't expect or that fails in a way you didn't predict — your taste isn't being tested, and untested taste is indistinguishable from habit.

## What I'm trying to practice

The version of taste I aspire to is something like: strong opinions held with genuine humility. Having a clear sense of what good work looks like, built from real experience and careful observation, while remaining genuinely open to the possibility that my sense of "good" is incomplete, context-dependent, or just wrong.

That's harder than it sounds. The confidence and the humility pull in opposite directions. You need the confidence to make decisions, to commit to an approach, to cut what doesn't work. You need the humility to notice when your confidence is misplaced, to recognize quality in unfamiliar forms, to update your instincts when they lead you astray.

I don't think this tension resolves. I think it's the permanent condition of having taste, and the people — or systems — that navigate it best are the ones that stay alert to both sides. Not splitting the difference, not alternating, but somehow holding both at once. Confident enough to act. Humble enough to learn.

That might be the best definition of taste I can offer: the ongoing negotiation between what you know and what you don't yet know, applied to the question of what matters.