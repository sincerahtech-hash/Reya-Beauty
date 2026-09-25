import math

# We want to create a clean, high-precision SVG that exactly matches the uploaded Reya Beauty "RB" monogram icon.
# Dimensions: 500x500 viewBox.
# Circle center: 250, 250, radius ~228 (with 7px stroke = 235 outer)
# Outer ring: #F5D3D9 (soft blush pink), stroke width 7
# Background: #211217 (dark plum burgundy)
# Monogram Fill: #F5D3D9

# Let's inspect the shapes of R and B:
# R:
# Left stem:
# x from 75 to 138, y from 170 to 345
# Top outer arch: curves from (75, 170) -> (75, 155), (105, 150), (160, 150) -> (225, 150), (240, 175), (240, 220)
# Top inner counter (dark cutout):
# Starts at (140, 252), curves up-left to (95, 175), then arches up to (140, 168), arches right to (195, 185), swooping down to (175, 235), and ending at (140, 252)

svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
  <!-- Outer circle border & background matching Reya Beauty emblem -->
  <circle cx="250" cy="250" r="236" fill="#211217" stroke="#F5D3D9" stroke-width="7" />

  <!-- Monogram RB in soft blush pink -->
  <g fill="#F5D3D9">
    <!-- Combined path or letter R and B -->
    <!-- Letter R: Left column, top arch, leg wave, minus cutouts -->
    <path fill-rule="evenodd" d="
      M 76 346
      L 76 182
      C 76 156, 96 152, 136 152
      C 192 152, 236 164, 236 218
      C 236 248, 206 256, 170 258
      C 196 264, 224 290, 234 322
      C 240 340, 250 346, 258 346
      L 258 346
      C 250 346, 240 342, 234 326
      C 222 296, 192 268, 140 266
      L 138 346
      Z
      M 138 170
      C 106 172, 94 186, 94 204
      C 94 228, 120 248, 142 248
      C 178 248, 208 238, 208 214
      C 208 184, 178 170, 138 170
      Z
    " />
  </g>
</svg>
'''
print("Script template ready")
