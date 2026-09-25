# Script to refine and generate the SVG for the Reya Beauty RB monogram
import math

svg_code = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="100%" height="100%">
  <!-- Outer circle border & background matching the official emblem -->
  <circle cx="500" cy="500" r="455" fill="#211217" stroke="#F5D3D9" stroke-width="14" />

  <!-- Monogram RB in soft blush pink -->
  <g fill="#F5D3D9">
    <!-- Letter R: Outer contour and counters -->
    <!-- We draw the complete positive shape of R and B -->
    <!-- R Body -->
    <path fill-rule="evenodd" d="
      M 152 694
      L 152 372
      C 152 334, 180 306, 264 306
      C 374 306, 472 328, 472 422
      C 472 470, 428 502, 372 506
      C 418 518, 460 554, 492 632
      C 502 658, 502 694, 502 694
      L 384 694
      C 384 694, 374 656, 350 620
      C 328 584, 298 564, 276 564
      L 276 694
      Z
      M 276 498
      C 276 438, 298 360, 362 360
      C 406 360, 412 408, 404 444
      C 394 488, 346 498, 276 498
      Z
    " />

    <!-- Letter B Body -->
    <path fill-rule="evenodd" d="
      M 502 694
      L 502 306
      C 580 306, 680 306, 756 322
      C 824 336, 848 376, 848 424
      C 848 474, 804 506, 744 514
      C 814 524, 856 568, 856 626
      C 856 676, 814 694, 730 694
      Z
      M 622 478
      C 666 478, 736 470, 736 422
      C 736 376, 672 360, 622 360
      Z
      M 622 642
      C 676 642, 744 636, 744 580
      C 744 528, 672 524, 622 524
      Z
    " />
  </g>
</svg>
'''

with open('public/assets/reya-icon.svg', 'w') as f:
    f.write(svg_code)
print("Generated public/assets/reya-icon.svg")
