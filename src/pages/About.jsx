import React, { useEffect, memo, useMemo } from "react"
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'

// Header Section
const Header = memo(() => (
    <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
            data-aos="zoom-in-up"
            data-aos-duration="600"
        >
            About Me
        </h2>
        <p
            className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
            data-aos="zoom-in-up"
            data-aos-duration="800"
        >
            <Sparkles className="w-5 h-5 text-purple-400" />
            Transforming ideas into digital experiences
            <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
    </div>
));

// Profile Image Section
const ProfileImage = memo(() => (
    <div className="flex justify-end items-center sm:p-12 p-0 py-2">
        <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
            <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
                <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
            </div>

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] group-hover:scale-105 transition-all duration-700">
                <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 group-hover:border-white/40 transition-all duration-700" />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 hidden sm:block group-hover:opacity-0 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

                <img src="/Photo.jpg" alt="Profile" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700" />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 hidden sm:block transition-all duration-700 z-20">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                    <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                </div>
            </div>
        </div>
    </div>
));

// Stats Card
const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
    <div data-aos={animation} data-aos-duration="1300" className="group">
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 -z-10 transition-opacity`} />

            <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-4xl font-bold text-white" data-aos="fade-up-left" data-aos-duration="1500">
          {value}
        </span>
            </div>

            <div>
                <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">{description}</p>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </div>
));

// Main About Component
const AboutPage = () => {
    const { totalProjects, totalCertificates, YearExperience } = useMemo(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
        const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
        const startDate = new Date("2021-11-06");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        return {
            totalProjects: storedProjects.length,
            totalCertificates: storedCertificates.length,
            YearExperience: experience
        };
    }, []);

    useEffect(() => {
        const initAOS = () => AOS.init({ once: false });
        initAOS();
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(initAOS, 250);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);

    const statsData = useMemo(() => [
        {
            icon: Code,
            color: "from-[#6366f1] to-[#a855f7]",
            value: 4,
            label: "Total Projects",
            description: "Innovative web solutions crafted",
            animation: "fade-right",
        },
        {
            icon: Award,
            color: "from-[#a855f7] to-[#6366f1]",
            value: 2,
            label: "Certificates",
            description: "Professional skills validated",
            animation: "fade-up",
        },
        {
            icon: Globe,
            color: "from-[#6366f1] to-[#a855f7]",
            value: 2,
            label: "Years of Experience",
            description: "Continuous learning journey",
            animation: "fade-left",
        },
    ], [totalProjects, totalCertificates, YearExperience]);

    return (
        <div id="About" className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-10">
            <Header />

            <div className="pt-8 sm:pt-12">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Hello, I'm</span>
                            <span className="block mt-2 text-gray-200" data-aos="fade-right" data-aos-duration="1300">
                Binil B
              </span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify" data-aos="fade-right" data-aos-duration="1500">
                            Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. I specialize in creating responsive, user-friendly websites with a focus on clean, interactive UIs. Passionate about UI/UX design, I aim to deliver seamless user experiences through thoughtful, well-crafted design and development.
                        </p>

                        <div className="flex flex-col lg:flex-row items-center gap-4 w-full">
                            <a href="https://drive.google.com/drive/folders/1BOm51Grsabb3zj6Xk27K-iRwI1zITcpo" className="w-full lg:w-auto">
                                <button className="w-full sm:px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] font-medium hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 animate-bounce-slow">
                                    <FileText className="w-5 h-5" /> Download CV
                                </button>
                            </a>
                        </div>
                    </div>
                    <ProfileImage />
                </div>

                <a href="#Portofolio">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                        {statsData.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </a>
            </div>

            <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes spin-slower { to { transform: rotate(360deg); } }
        
      `}</style>
        </div>
    );
};



export default memo(AboutPage);
