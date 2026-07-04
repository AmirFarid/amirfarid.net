# Image Prompts

Use these prompts to create more images that match the current visual style of the website.

## Overall Style

Use this style block in every prompt:

```text
Create a clean modern academic website illustration. Use an off-white background, white surfaces, thin deep-green linework, muted gold accent lines, and subtle gray borders. The image should feel technical, minimal, calm, research-oriented, and professional. Use abstract diagrams, connected blocks, grids, cards, nodes, and simple system shapes. No people, no cartoons, no 3D, no neon colors, no dark background, no stock-photo look, no text labels. Flat vector style, high readability, balanced whitespace, 16:10 composition.
```

## Project Cover Prompt

```text
Create a clean modern academic website illustration for a research project about [PROJECT TOPIC].

Visual idea: [DESCRIBE THE SYSTEM OR CONCEPT, SUCH AS distributed storage nodes, trusted hardware blocks, network coding paths, AI safety challenge cards, embedded devices, or file-system layers].

Style: off-white background, white card-like surfaces, deep green linework, muted gold accent paths, subtle gray borders, minimal abstract technical diagram, professional academic tone, flat vector style, no text labels, no people, no logos, no dark background, no 3D. Use a 16:10 horizontal composition.
```

## Blog Cover Prompt

```text
Create a clean modern academic website illustration for a blog essay about [BLOG TOPIC].

Visual idea: an abstract research notebook or calm systems diagram showing [KEY THEME], using connected nodes, simple panels, and quiet geometric structure.

Style: off-white background, white surfaces, thin deep-green linework, muted gold accent detail, subtle gray borders, minimal and reflective, professional academic tone, flat vector style, no text labels, no people, no logos, no stock-photo look. Use a 16:10 horizontal composition.
```

## Specific Examples

### Distributed Storage

```text
Create a clean modern academic website illustration for a distributed storage research project.

Visual idea: several storage blocks connected by thin lines, with a few highlighted repair or audit paths between them. The structure should suggest decentralized storage, redundancy, and verification.

Style: off-white background, white card-like surfaces, deep green linework, muted gold accent paths, subtle gray borders, minimal abstract technical diagram, professional academic tone, flat vector style, no text labels, no people, no logos, no dark background, no 3D. Use a 16:10 horizontal composition.
```

### Network Coding

```text
Create a clean modern academic website illustration for a network coding and storage security project.

Visual idea: a structured grid with storage cells and curved highlighted paths crossing between nodes, suggesting coded data movement and recovery.

Style: off-white background, white surfaces, thin deep-green linework, muted gold accent path, subtle gray borders, minimal abstract technical diagram, professional academic tone, flat vector style, no text labels, no people, no logos, no dark background, no 3D. Use a 16:10 horizontal composition.
```

### LLM Security Teaching

```text
Create a clean modern academic website illustration for an LLM security teaching or hackathon project.

Visual idea: a classroom-style challenge board with connected prompt cards and simple route lines, suggesting exercises, safeguards, and challenge progression.

Style: off-white background, white card-like surfaces, deep green linework, muted gold connector lines, subtle gray borders, minimal abstract technical diagram, professional academic tone, flat vector style, no text labels, no people, no logos, no dark background, no 3D. Use a 16:10 horizontal composition.
```

## Negative Prompt

```text
Avoid: photorealism, people, faces, hands, corporate stock imagery, dark blue gradients, purple gradients, neon effects, glowing particles, busy backgrounds, text labels, fake UI dashboards, oversized icons, cartoons, mascots, 3D renders, dramatic lighting, clutter.
```

## Notes

- Keep images calm and technical.
- Prefer abstract diagrams over literal scenes.
- Use the same palette as the website: off-white, white, deep green, muted gold, and soft gray.
- Save final images in `public/images/`.
- Add image metadata to the relevant Markdown frontmatter:

```yaml
image:
  src: /images/example.svg
  alt: Concise description of the image
```
