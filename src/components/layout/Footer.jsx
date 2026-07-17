import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){

return(

<footer
className="border-t mt-15"
style={{
borderColor:"var(--border)"
}}
>

<div className="max-w-6xl mx-auto py-12">

<h2
className="text-3xl font-bold"
style={{
color:"var(--heading)"
}}
>
Trace<span className="text-emerald-500">DS</span>
</h2>

<p
className="mt-3"
style={{
color:"var(--muted)"
}}
>
Understand • Visualize • Build
</p>

<div className="flex justify-center gap-8 mt-8">

<a href="#">Home</a>

<a href="#">Topics</a>

<a href="#">Dashboard</a>

<a href="#">About</a>

</div>

<div className="flex justify-center gap-6 mt-8">

<FaGithub size={24}/>

<FaLinkedin size={24}/>

</div>

<p
className="mt-10 text-center"
style={{
color:"var(--muted)"
}}
>

© 2026 TraceDS • Built with ❤️ by Dimpal Agarwal

</p>

</div>

</footer>

)

}

export default Footer;