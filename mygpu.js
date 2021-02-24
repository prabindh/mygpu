
function RendererMagic(r)
{
    const gpurendererInfo = document.getElementById('mygpu-renderer-info');
    
    var gpustring = JSON.stringify(mygpulist);
    var json = JSON.parse(gpustring);
    for (var i = 0; i < json.family[0].gpus.length; i++)
    {
        var gpu = json.family[0].gpus[i];
        var name = gpu.name;
        if (r.search(name) != -1)
        {
            gpurendererInfo.innerText = gpu.magic;
            return;
        }
    }
    gpurendererInfo.innerText = 'Error: Renderer Arch not found :' + r;
}

function CopyToClipBoard () 
{
    // From https://stackoverflow.com/a/38672314
  // Create a new textarea element and give it id='temp_element'
  var textarea = document.createElement('textarea')
  textarea.id = 'temp_element'
  // Optional step to make less noise on the page, if any!
  textarea.style.height = 0
  // Now append it to your page somewhere, I chose <body>
  document.body.appendChild(textarea)
  // Give our textarea a value of whatever inside the div of id=containerid
  textarea.value = document.getElementById('mygpu-renderer-info').innerText
  // Now copy whatever inside the textarea to clipboard
  var selector = document.querySelector('#temp_element')
  selector.select()
  document.execCommand('copy')
  // Remove the textarea
  document.body.removeChild(textarea)
}


function MyGPU()
{
    var canvas = document.getElementById('mygpucanvas');
    canvas.style.display = "none";
    
    const gpuInfo = document.getElementById('mygpu-info');
    if (canvas != null)
    {
        var gl = canvas.getContext('webgl');
        if (gl != null)
        {
            var debugInfo = gl.getExtension('WEBGL_debug_renderer_info'); 
            if (debugInfo != null)
            {
                var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL); 
                var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                gpuInfo.innerText = 'Renderer: ' + renderer;
                RendererMagic(renderer);
            }
            else
            {
                gpuInfo.innerText = 'WEBGL_debug_renderer_info not supported or disabled';
            }
            
            
        }
        else
        {
            gpuInfo.innerText = 'Error - null webgl context';
        }
    }
    else
    {
        gpuInfo.innerText = 'Error - null canvas';
    }
}