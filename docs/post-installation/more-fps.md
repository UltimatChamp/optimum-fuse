---
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More FPS

Want to get more frames!?

_<small>(All the credit for this page goes to **HyperSoop**)</small>_

<Tabs>
<TabItem value="unethical" label="Unethical Choices!?" default>

### A low-res RP
You can use a low-resolution resource-pack to increase your FPS. However, this isn't the motive of OF; OF improves performance, while not sacrificing any visuals, if not making them better. 

<hr />

### Exordium

Not in OptimumFuse, since it tends to actually make performance worse on GPU-bottlenecked setups, in addition to making the UI feel a bit worse. But if you're CPU-bottlenecked, it might benefit you.

<hr />

### Sodium Extra

This mod can also be used to disable more visual elements and increase performance this way.

<hr />

### Methane

Not in OptimumFuse! This mod completely removes lighting from the client (among some other things). This results in a performance boost at the cost of the game looking worse. 

<hr />

### VulkanMod

:::danger

Only for **advanced** users!
- Installing this mod, may crash your game. This mod is incompatible with Embeddium _(Sodium)_. You will also have to uninstall all Embeddium _(Sodium)_ addons, which means, no shaders.
- This mod also may not work on your computer!

:::

A rendering optimization mod akin to Sodium utilizing the Vulkan API. It won't work on certain old GPUs, and is incompatible with some other optimization mods. Some people report it performing better than Sodium on their hardware, and for some it's worse, so try it and see.

<hr />

### wgpu-mc

:::danger

Only for **advanced** users!
- Installing this mod, may crash your game. This mod is incompatible with Embeddium _(Sodium)_. You will also have to uninstall all Embeddium _(Sodium)_ addons, which means, no shaders.
- This mod also may not work on your computer!

:::

wgpu-mc is a standalone, mostly-batteries-included rendering engine written in Rust. Electrum is a fabric mod that integrates wgpu-mc with Minecraft. Both the engine and Electrum are both currently under active development. wgpu-mc is fairly mature, while Electrum is more WIP.

</TabItem>

<TabItem value="jvm" label="JVM optimization" default>

Tuning the JVM is a good way to improve performance, especially on the server-side of things; good flags lie at https://github.com/brucethemoose/Minecraft-Java-Performance-Flags ; it's less of a guide and more of a list of flags to make the JVM do minecraft well. Just follow along and gather the flags you need. Those flags can really help some people who are experiencing lag spikes. The article also has a section about GraalVM, which is a Java distribution with more than a few optimizations which may be helpful as well.

Don't forget to set your -Xms and -Xmx flags to the amount of RAM you want to give to Minecraft! Setting them both to the same value is said to be good practice, but isn't super nessesary, especially if you're low on system memory. OF needs around 1.25 GB of memory allocated to run comfortably, but 2+ GB is still recommended.

:::tip
### Recommended Flags
```
-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:+UseNUMA -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:MaxNodeLimit=240000 -XX:NodeLimitFudgeFactor=8000 -XX:+UseVectorCmov -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:ThreadPriorityPolicy=1 -XX:+UseShenandoahGC -XX:ShenandoahGCMode=iu -XX:ShenandoahGuaranteedGCInterval=1000000 -XX:AllocatePrefetchStyle=1 -XX:ConcGCThreads=2
```
:::

</TabItem>

<TabItem value="options" label="Graphics Options" default>

<h2>General</h2>

If you're generally experiencing lag, try reducing your render distance. It's something everyone should know about, and it matters way more in singleplayer (so you might as well raise it a bit on multiplayer servers).
Simulation distance only matters in singleplayer, and affects how far away from you things are still fully processed. 5 chunks is generally just fine, but you can raise it if you have CPU power to spare.

VSync should be disabled if you really want every last bit of performance - the way it works by default sacrifices performance to sync frames. Ideally, you should use Adaptive VSync, which you can either enable for Minecraft in your GPU's control panel or get using the Sodium Extra mod (though you might have issues with it on AMD GPUs)

<hr />

<h2>Quality</h2>

Don't set your graphics to Fabulous unless you're really worried about transparent things rendering correctly at all times. It can have a noticable negative performance impact on GPU-bottlenecked setups. Otherwise, this option affects weather and leaves quality, which you can configure later on.

Leaves quality determines whether leaves are rendered as opaque (Fast) or see-through and heavier on performance (Fancy).

OF has MoreCulling included, which allows for very customizable culling of fancy leaves which at the time of writing comes in 6 flavors for you to pick from. All of these do, to some extent, affect how the leaves look to improve performance. The default in OF is "Depth" with the culling amount of 3, which is almost indistinguishable from vanilla fancy leaves. Play around with its options in the right-most tab to achieve your preferred balance of performance and visuals.

Weather quality controls how far away from you weather effects are still rendered, changing it doesn't make much of a visual difference but putting it to Fast can improve performance quite a bit whenever there's weather going on.

Particles don't have much of an impact on performance except for some nether biomes or simular areas, keep it at "All" unless you're experiencing particle-related performance issues on your configuration.

Smooth lighting and biome blending don't matter for FPS, only for chunk loading speeds. Chunk loading is really fast with Sodium anyway, so no need to worry about those.

Mipmap levels also don't matter for performance enough to lower them in most cases. The visual improvement they bring is well worth the small performance impact, so keep it at 3 or 4 unless you're specifically having issues.

<hr />

<h2>Performance</h2>

"Chunk Update Threads" controls how many CPU threads are used to update changed and load new chunks. You should probably keep this at default - it's usually a good balance for general play, however, if you run high render distances or in some other way load many chunks at once, you can turn it up to see chunk loading speeds increase at cost of a possible hit to framerate stability.

"Always Defer Chunk Updates" makes chunk updates lazier, which may help a lot in cases with many chunk updates (huge piston contraptions or explosions) but may also cause important chunk updates not to happen, causing visual lag. Keep it enabled unless experiencing issues with broken blocks not disappearing and placed blocks not appearing.

Pretty much everything else in this section is to be kept enabled, as those are moderately important optimizations which directly affect performance (Simular goes for the "Advanced" tab).
For "Use Entity Culling", it's superseded by the Entity Culling mod, and that's why it's disabled by default in OF - disabling it helps performance a tiny bit in some cases.

</TabItem>
</Tabs>
