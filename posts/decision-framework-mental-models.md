---
title: "The 10 Mental Models I Use to Make Hard Decisions"
date: 2026-05-02
layout: post.njk
tags: [posts, decision-making, mental-models, strategy]
---

I used to make important decisions the same way I made unimportant ones — by feel. Gut instinct. Whatever seemed right in the moment. That works fine for lunch. It works terribly for career moves, financial bets, or deciding what to actually build next.

Over the past year I put together a personal decision framework — a set of 10 mental models borrowed from probability, economics, and cognitive science — that I now run through whenever something genuinely matters. This post is my attempt to explain it clearly enough that you could actually use it.

---

## Why mental models?

A mental model is just a structured way of looking at a problem. The goal isn't to be robotic — it's to catch the blind spots that emotion and experience create. Your brain is running highly compressed heuristics based on a small, biased sample of lived experience. Mental models are a patch for that.

I group these 10 models into three phases that mirror how any decision actually unfolds.

---

## Phase 1 — Should I even pursue this?

### 1. Expected Value

The math most people skip. List the possible outcomes, assign an honest probability to each, estimate the payoff or cost, then multiply and sum.

```
EV = Σ (probability × payoff)
```

The reason to formalize this: **loss aversion**. Humans feel losses roughly twice as intensely as equivalent gains. Your gut will reject a positive-EV bet because the downside feels too vivid. Running the numbers forces the feeling aside.

One important guardrail: if the downside is catastrophic — can't pay rent, serious health risk — don't take the bet even when EV is positive. Variance matters when stakes are existential.

### 2. Base Rate

Before you evaluate your specific opportunity, ask: *how often does this type of thing actually work?*

The human tendency is to treat our situation as special. It rarely is. Startups reaching profitability: roughly 6%. Niche developer tools finding real buyers: maybe 35–40%. Any fund beating the market three years running: around 15%. Those numbers should anchor your probability estimates before your optimism inflates them.

### 3. Survivorship Bias

You only see the winners. Losers are quiet.

This is why every category of success looks easier than it is — the people who tried and failed don't write blog posts about it, don't show up in your feed, and don't give conference talks. Your brain builds its model of "how hard is this" from the visible sample, which is systematically skewed toward success.

Before accepting any success story as evidence of a viable strategy, look for the graveyard. Ask: *how many people tried this, and what percentage won?* If you can't find the denominator, assume the success rate is low.

Survivorship bias is also the main reason your internal base rate estimate is almost always too high. Fix the base rate by going looking for the people who failed.

---

## Phase 2 — What is my brain hiding from me?

### 4. Sunk Cost

Past investments are gone regardless of your next decision. They are irrelevant.

This is the trap that keeps people in bad jobs, holding losing positions, and continuing dead projects long past the point of usefulness. The mental move: reset to zero. Ask yourself — *if I were starting fresh today, knowing what I know now, would I choose this path?* If the answer is no, exit. The past doesn't come back.

The best version of this model is preventive: set explicit exit checkpoints *before* you start. Decide the conditions for quitting while you're rational, not when you're emotionally invested.

### 5. Inversion

Instead of asking how to succeed, ask how to guarantee failure — then avoid those actions. Charlie Munger popularized this. The original credit goes to mathematician Carl Jacobi: *"Invert, always invert."*

The reason it works: the brain is better at spotting dangers than opportunities. Inversion forces a systematic scan for traps before you walk into them.

Applied example — I was building a side project and wanted $1,500/mo from it. I asked: *what would guarantee zero revenue?*
- Build for three months without talking to a user
- Pick an oversaturated market
- Over-engineer the architecture
- Never publish anything

That list became my negative checklist. My plan was just "don't do any of these things."

### 6. Second-Order Thinking

First-order thinking solves the immediate problem. Second-order thinking asks what happens as a result of the solution — and what happens after that.

The mental move: after choosing an action, ask *"and then what?"* at least twice. Look for unintended consequences, opportunity costs, downstream effects.

There's a useful heuristic for this called Chesterton's Fence: before removing something that seems useless, understand *why it's there*. It may be solving a problem you haven't encountered yet.

---

## Phase 3 — How do I act on this correctly?

### 7. Bayesian Updating

Every model above runs at *compile time* — before you commit. This one runs at *runtime*, after you've committed. It's the feedback loop that tells you when to hold and when to pivot.

The idea: update beliefs gradually and proportionally as new evidence arrives. Don't ignore evidence. Don't overcorrect to a single data point.

When something new comes in, ask: *how likely is this signal if my belief is true? How likely if it's false?* Update proportionally. The trap to avoid is treating every piece of contradicting information as a reason to panic, and every confirming signal as final proof.

The diagnostic question: *if I'm wrong, what would I expect to see? Am I seeing it?*

### 8. Kelly Criterion

Given a bet with positive EV, how much should you commit?

```
f* = (p × b − q) / b

p = probability of winning
q = 1 − p
b = how much you win per dollar risked
```

Full Kelly is mathematically optimal but emotionally brutal — the variance will destroy you before the math pays off. In practice, use quarter-Kelly to half-Kelly.

The model extends well beyond money. Career bets: don't quit your job and go all-in on a side project — reduce your hours and dedicate one focused day per week. Learning: don't try to absorb five skills simultaneously — pick the highest-value one and go deep. Relationships: twenty shallow connections are worth less than four deep ones.

The right-sizing question: *am I committing enough to matter, but not so much that being wrong ruins me?*

### 9. Pareto Principle

80% of outcomes come from 20% of causes. Find the 20% and protect it.

When I'm overwhelmed — by a feature list, a to-do pile, an interview prep plan — this is the first cut I make. Which one thing, if done well, would produce most of the result? Start there. Everything else either waits or disappears.

The 20% changes as context changes, so audit it periodically. What was the highest-leverage use of your time last quarter may not be this quarter.

### 10. Ockham's Razor

Among competing solutions, prefer the one with the fewest assumptions. Simplicity is a feature, not a compromise.

This is where I've been burned most as an engineer. The pull toward microservices, event sourcing, clever abstractions — it's real. But a monolith that ships beats a perfect distributed system that doesn't. Build the simple thing first. Complicate only when the problem actually demands it.

The same applies to decision analysis itself. If you're building a 47-step decision tree for a career choice, you're hiding from the decision, not making it.

---

## Running the whole thing

For any major decision I run a quick mental pre-flight through all three phases:

**Phase 1:** Did I calculate EV honestly? What's the realistic base rate? Where's the graveyard?

**Phase 2:** Am I holding on because of sunk costs? What would guarantee failure? What are the second-order effects?

**Phase 3:** What's my prior and how will I update it? Am I sizing the bet safely? What's the 20%? What's the simplest path that actually works?

It takes about ten minutes. For decisions that will affect the next year of your life, that's a good trade.

---

The framework isn't magic and it doesn't remove uncertainty. What it does is make your reasoning visible so you can check it — and so future-you can understand why past-you made the call. That audit trail, it turns out, is most of the value.

If this resonated and you want the full reference — including the model tables, common base rates, and an AI prompt for running a structured decision review — I keep a detailed version in my notes that I'm happy to share.
