# mygpu

Obtain compute Information about Nvidia GPU

## How to use

1. Browser

Browse to this link - https://gpupowered.org/mygpu/

If the GPU is supported and the browser is configured to use the Nvidia processor, the arch info will be displayed in the same page.

2. Python script

Contributions welcome.

## Requirements

- WebGL supported browser

- Nvidia GPU 

-- On Hybrid systems/ notebooks with multiple GPUs - Use Nvidia Control Panel to select the Nvidia Processor for the browser, for example by referring to https://alteredqualia.com/texts/optimus/ 

-- On Tegra systems, Chrome seems to be using SwiftShader by default

## My GPU is not listed

- File an issue in this repository

## Other references that may be of help

- https://patrickorcl.medium.com/compile-with-nvcc-3566fbdfdbf

- https://arnon.dk/matching-sm-architectures-arch-and-gencode-for-various-nvidia-cards/

- https://privacycheck.sec.lrz.de/active/fp_wg/fp_webgl.html

- https://github.com/timvanscherpenzeel/detect-gpu

## Disclaimer

Author or contributors not responsible for any direct, indirect, or consequential loss or damage resulting from any usage of this data. 

This is not an official Nvidia product.

Sourced from public material at https://en.wikipedia.org/wiki/CUDA and https://developer.nvidia.com/cuda-gpus#compute. Only covers GPUs with CUDA compute capability > 5.0.

Issues to be raised at https://github.com/prabindh/mygpu
   