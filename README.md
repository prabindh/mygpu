# mygpu

Obtain compute capability information about Nvidia GPU

# Table of contents
1. [Getting](#howto)
2. [Using](#usage)
3. [Requirements](#reqs)
4. [Bugs](#unlisted)
5. [References](#references)
5. [Disclaimer](#disclaimer)

## How to get compute capability <a name="howto"></a>

### Browser <a name="browser"></a>

Browse to this link - https://gpupowered.org/mygpu/

If the GPU is supported and the browser is configured to use the Nvidia processor, the arch info will be displayed in the same page.

### Manually <a name="manual"></a>

Obtain the name of the GPU by running below command on command line

`nvidia-smi --query-gpu=name --format=csv`

Then use this json file to find the compute capability

https://github.com/prabindh/mygpu/blob/main/mygpu.json

## Using this information <a name="usage"></a>

### In Makefiles <a name="makefiles"></a>

`ARCH= -gencode arch=compute_52,code=compute_52`
`$(OBJDIR)%.o: %.cu $(DEPS)`
`    $(NVCC) $(ARCH) $(COMMON) --compiler-options "$(CFLAGS)" -c $< -o $@`

### In Visual Studio (For CUDA Runtime Project Type only) <a name="vstudio"></a>

Enter the obtained string in this field

`Configuration Properties --> CUDA C/C++ --> Device --> Code Generation`

## Requirements <a name="reqs"></a>

- WebGL supported browser

- Nvidia GPU 

-- On Hybrid systems/ notebooks with multiple GPUs - Use Nvidia Control Panel to select the Nvidia Processor for the browser, for example by referring to https://alteredqualia.com/texts/optimus/ 

-- On Tegra systems, Chrome seems to be using SwiftShader by default, so perform the manual step of identification as above

## My GPU is not listed <a name="unlisted"></a>

- File and issue at https://github.com/prabindh/mygpu

## References <a name="references"></a>

- https://patrickorcl.medium.com/compile-with-nvcc-3566fbdfdbf

- https://arnon.dk/matching-sm-architectures-arch-and-gencode-for-various-nvidia-cards/

- https://privacycheck.sec.lrz.de/active/fp_wg/fp_webgl.html

- https://github.com/timvanscherpenzeel/detect-gpu

## Disclaimer <a name="disclaimer"></a>

Author or contributors not responsible for any direct, indirect, or consequential loss or damage resulting from any usage of this data. 

This is not an official Nvidia product.

Sourced from public material at https://en.wikipedia.org/wiki/CUDA and https://developer.nvidia.com/cuda-gpus#compute. Only covers GPUs with CUDA compute capability > 5.0.
   