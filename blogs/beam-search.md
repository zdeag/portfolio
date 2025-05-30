---
slug: beam-search
title: "Beam Search"
image: "beam-search.png"
description: "Dive into Beam Search, a powerful technique for token generation in language models. "
date: "2024-03-25"
tags: ["LLM", "Post-Training"]
---

Had a random spirt to look over llm post-training and specifically into reasoning.

## Beam Width Search
Beam Search implements an idea of a tree-like structure for search for the most optimal token generation string. Used at the inference step of the token generation process, Beam Search takes the *k* highest probable token generation sequence and quickly appends it to the overall sequence structure. It continues this process, pruning less probable sequences, until an end sequence token is generated.[^1]

In an example, we can look to translating the phrase "the cat" from English to Spanish using Beam Search.

---
## Example:
Input: "the cat"
Expected Output: "el gato" or "la gata"
K: 2

Step One:
The model will generate possibilities that apply to the word "The"

- "el" (p = 0.9)
- "la" (p = 0.7)
- "los" (p = 0.3)
- "las" (p = 0.25)

Since we inputed K = 2, it means that we take the two most probable outputs generated and build of them.

Step Two:
Now, the model will generate another list of possibilities.

Appending to "el":
-  "el gato" (0.9 * 0.85 = 0.765)
- "el fel" (0.9 * 0.4 = 0.36)

Appending to "la":
- "la gata" (0.7 * 0.9 = 0.63)
- "la minia" (0.7 * 0.3 = 0.21)

Finished:
Looking at the probabilities, we can confidently say that "el gato" would be the correct translation give that the cat is a male. However, in this example, we only set k = 2. The higher the *k* value is, the more routes the model can explore to produce a more accurate output, especially given a longer input for translation.

---
## Applying Beam to Reasoning with LLMs
Given that this blog is about applying this algorithm to the context of post-training methods, we can look at it in the way of reasoning. It's complicated to emulate the human processes for reasoning, however, beam search seems to be a probable method of doing so. The analogy of applying the idea to chess works as in a player will map out the possible moves on the board and take the highest probable string of moves that puts the player in a better situation on the board.

In this context, exploring more paths of reasoning allows for the model to tackle challenging problems that involve deeper reasoning paths. The ability to branch off *k* paths gives a more coherent outcome rather than using greedy decoding.[^2] Though only used in the inference portion of token sequence generation, the underlying technique is applied to reasoning.

In a future blog post, the framework of 'Tree-of-Thoughts' allows for the plugging in of different search algorithms and specifically uses Beam as an option of generating sequences.[^2] The technique is used still today in modern test-time scaling methods to generate the most probable and accurate reasoning path for user inputs.

---
# References:
[^1]: Width.ai. "What Is Beam Search?" Width.ai, n.d., www.width.ai/post/what-is-beam-search. Accessed 25 Mar. 2025.

[^2]: Kumar, Komal, et al. “LLM Post-Training: A Deep Dive into Reasoning Large Language Models.” arXiv, 2025, arxiv.org/abs/2502.21321. Accessed 25 Mar. 2025.
