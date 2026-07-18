import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

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

<Link
                            to="/dashboard"
                            className="hover:text-emerald-500 transition-all duration-300"
                        >
                            Dashboard
                        </Link>

<a href="#about">About</a>

</div>

<div className="flex justify-center gap-6 mt-8">

<a href="https://github.com/dimpalagarwal" target="_blank" rel="noreferrer"style={{color: "var(--heading)"}}>
                <FaGithub size={26} />
              </a>
              <a href="https://www.linkedin.com/in/dimpal-agarwal-478526326/" target="_blank" rel="noreferrer" style={{color: "var(--heading)"}}>
                <FaLinkedin size={26} />
              </a>

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