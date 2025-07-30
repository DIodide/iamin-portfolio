---
title: The problem with current agentic tools (Cursor, Warp, etc.)
description: Quick thoughts and notes on vibe coding and agentic tools that are encroaching on developer work
date: 2025-07-25
---

**AStack: Vibe Coding

WHAT IS VIBE CODING?
  
In the following document, I will be referring to Cursor’s agentic functionality as Cmd + I and referring to Cursor’s inline code editing functionality as Cmd K


According to the original post that popularized the term vibe coding:

- Not reading code diffs
- Good for “throwaway” weekend projects
- “I’m building a project or web app, but it’s not really coding.”
- Giving into the “vibes” and giving up on the code
- Forgets the code exists

## INITIAL THOUGHTS


I don’t really agree entirely with the above, as if we take this definition of vibe coding, and have people actually apply it. Depending on the use case (nuance here), “vibe-coding” through usage of Cursor’s Cmd-I (agentic) can take you super far, in my own experience it’s almost seamless, but there is a caveat, you get stuck because of a lack of feedback loops. There is no human interaction that stops you from solving problems the “hard” way. With AI tools, solving things the “hard” way is as easy as solving things the “easy” way. 

  
In a pre-LLM world, a junior developer might be hardstruck on implementing a feature in a very specific manner, in reality if successfully implemented in this way, it would work, but would lead to more overhead and technical debt for said team. 
  

Say this developer went and asked their senior for help, who might lead the junior in a different direction. Humans gravitate towards easy, maintainable solutions, and so the senior in his experience may say, “Why are you doing this in the first place, do it this other easier way instead.”


However, LLMs and subsequently, tools like Cursor do not do this! They will go ahead and solve the issue in the “hard” way, and the junior developer in this case, not knowing any better, continues along and ships the feature. (Assuming that QAs, SREs, and code review teams aren’t doing their jobs)

  

Depending on what is being done, these agentic tools can carry you pretty far, you won’t see the cliff until Cursor carries you off, but up until then..

  

### Mountain Analogy: The Three Types of Developers Using Agentic Tools like Cursor
#### The Vibe-Only Coder: Carried off a cliff by cursor…

  

This type of developer relies on Cmd +I, rarely pausing to reflect on what’s being generated. They don’t read diffs. They don’t question design choices. Their entire workflow is composed of a continuous yet rapid stream of prompts, code completions, and near instant feature shipping.

And for a while, this works. The “vibe-only” coder appears to both himself and unsuspecting end users as extremely productive, due to the increasing quality of code outputs, thinking functionality, and tool-call ability by models like Claude and o4, coupled with the emphasis on human-AI interaction being pioneered by companies such as Cursor and Windsurf. 

So, the vibe coding works, the project grows. Features get built and shipped, UI renders, APIs respond. An observer might say “All is well” satisfied with the display of progress shown by our protagonistic vibe coder. 

Eventually, these applications built by “vibe-only” and adjacent methodologies fall apart, tools like Cursor take them to a cliff, but they fall straight off. For example, a new feature can’t be added without breaking three others. Refactoring is impossible without starting from scratch. And most importantly, there is no easy path backwards. (downwards in the analogy)

  
#### Two other analogies

## THE VISION: ENHANCING AGENTIC TOOLS TO REACH FOR “PEAKS”

  

How can we implement this? There exist tools such as HikaFlow, CodeRabbit, etcetera that serve as code review tools, but the idea here isn’t exactly code review. I would call it more akin to smart refactoring but I don’t think that entirely encompasses my idea. 

  

Implementation Ideas and Details:

- What will we train on? 
- GitHub diffs/commits
- Users will be able to ...
- How will we create informed insights?
- Tools and Technologies
- RAG, tool call based (MCP, LangChain, Vercel AI SDK)
- RAG, vector embeddings based (Choose a Vector DB, like Pinecone)
- Hybrid (both)

Sources: 

[https://techcrunch.com/2025/04/10/ai-models-still-struggle-to-debug-software-microsoft-study-shows/](https://techcrunch.com/2025/04/10/ai-models-still-struggle-to-debug-software-microsoft-study-shows/) 

  

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxSAJzm0wTytbhCAioUopgB4itQb1xRbQE-8q59MhvDnypWp0Gq-roYeasAMIDmne0Vo9M7alpd5cPcQbgqEz8W32xPRAfKwYEEcVXu7kZ8YhcmhpDeLOLrGOnjmgbBpdCOfxpfg?key=BsWx1UOdXzCGM7QSrj6DXg)

  

Sentry’s AI Debugging Agent: Seer


[Kiro: Amazon's unexpected Cursor competitor](https://www.youtube.com/watch?v=ca8fs7ZeA7U) 

[https://kiro.dev/blog/introducing-kiro/](https://kiro.dev/blog/introducing-kiro/)