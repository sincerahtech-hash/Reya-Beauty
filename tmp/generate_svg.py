# Script to generate the precise SVG for Reya Beauty RB monogram
import os

svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <style>
      .bg-circle { fill: #211217; stroke: #F5D3D9; stroke-width: 14; }
      .letter-fill { fill: #F5D3D9; }
      .cutout { fill: #211217; }
    </style>
  </defs>

  <!-- Outer Ring and Background -->
  <circle cx="500" cy="500" r="455" class="bg-circle" />

  <!-- The Monogram Group -->
  <g id="reya-monogram">
    <!-- Base solid pink silhouette of R and B -->
    <!-- Letter R outer shape -->
    <path class="letter-fill" fill-rule="evenodd" d="
      M 152 694
      L 152 368
      C 152 332, 172 306, 256 306
      C 370 306, 472 324, 472 418
      C 472 476, 420 502, 368 506
      C 418 518, 468 560, 502 642
      L 502 694
      C 442 694, 386 694, 330 694
      C 328 650, 310 610, 276 570
      L 276 694
      Z
      M 276 506
      C 276 430, 290 358, 360 358
      C 412 358, 412 420, 396 460
      C 376 506, 316 506, 276 506
      Z
    " />
  </g>
</svg>
'''

with open('/tmp/test_out.svg', 'w') as f:
    f.write(svg)
print("Saved /tmp/test_out.svg")
