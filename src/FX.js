import{ DepthOfField, 
        EffectComposer, 
        LensFlare
        } from "@react-three/postprocessing"

import { BlendFunction } from 'postprocessing'

export default function FX(){

    return(
    
        <EffectComposer>

            <DepthOfField
                    focusDistance={0}
                    focalLength={0.02}
                    bokehScale={2}
                  
                />

            <LensFlare 
            blendFunction={BlendFunction.Screen}
            glareSize={0.96}  
            />

            {/* <ChromaticAberration
                blendFunction={BlendFunction.NORMAL} // blend mode
                offset={[0.002, 0.001]} // color offset
            /> */}

        </EffectComposer>
        
    );
}
