import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import { 
  ArrowRight, 
  Sparkles, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Subtitles,
  Video,
  CheckCircle2,
  Clapperboard,
  ArrowUpRight,
  Sparkle
} from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Video progress timer simulation if standard video isn't auto-playing
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 50) return 0;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    soundFX.playClick();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(true);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const captions = [
    { start: 0, end: 10, urdu: "السلام علیکم! میرا نام صبا حمید ہے اور میں ایک AI Visual Product Designer ہوں۔", eng: "Assalam-o-Alaikum! My name is Saba Hameed, AI Visual Product Designer." },
    { start: 10, end: 20, urdu: "اگر اپ سوچ رہے ہیں کہ برانڈز سینیماٹک پروڈکٹ ایڈز کیسے بناتے ہیں، تو میں اپکو سٹیپ بائی سٹیپ دکھاؤں گی۔", eng: "If you wonder how brands create cinematic product ads, I show you step-by-step." },
    { start: 20, end: 30, urdu: "ہم بات کریں گے کہ AI کی مدد سے سمپل پروڈکٹس کو 3D اور لگژری کمرشلز میں کیسے بدلا جاتا ہے۔", eng: "Learn how AI transforms simple product photos into 3D & luxury ad commercials." },
    { start: 30, end: 40, urdu: "میں اپنے رئیل کلائنٹ پروجیکٹس اور پروڈکٹ ایڈورٹائزمنٹس اپکے ساتھ شیئر کروں گی۔", eng: "Sharing real client projects, AI storyboards, and product ad commercials." },
    { start: 40, end: 50, urdu: "جہاں ہم AI کی مدد سے آرڈینری پروڈکٹس کو ایکسٹرا آرڈینری برانڈز میں بدلنا سیکھیں گے!", eng: "Join me to turn ordinary products into extraordinary brands with AI!" }
  ];

  const currentCaption = captions.find(c => currentTime >= c.start && currentTime <= c.end) || captions[0];

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 bg-[#FAF9F6] border-b border-[#1A1A1A] flex flex-col justify-center">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header Label */}
        <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]/20">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold">
            [ 01 ] Introduction & Video Showcase
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/70">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 pt-8">
          
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 lg:pr-12 lg:border-r lg:border-[#1A1A1A]/20 flex flex-col justify-center space-y-6">
            
            {/* Headline */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#1A1A1A]/60 block">
                AI Product Design & Content Creation
              </span>
              
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light leading-[0.88] tracking-tight text-[#1A1A1A]">
                Crafting <span className="italic font-normal text-[#D23D1F]">Generative</span><br />
                AI Visuals.
              </h1>
              
              {/* Dynamic Role Rotator */}
              <div className="pt-2 flex items-center gap-3 text-lg sm:text-xl font-serif italic text-[#1A1A1A]/80">
                <span>Specialized in</span>
                <span key={roleIndex} className="not-italic font-mono text-sm uppercase tracking-wider text-[#D23D1F] px-2.5 py-1 border border-[#1A1A1A] bg-[#F2EFED]">
                  {PERSONAL_INFO.roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Bio */}
            <p className="text-[#1A1A1A]/80 text-base sm:text-lg leading-relaxed font-sans max-w-xl">
              {PERSONAL_INFO.bio}
            </p>

            {/* Editorial CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => soundFX.playClick()}
                className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#D23D1F] text-[#FAF9F6] font-mono text-xs uppercase tracking-widest transition-all border border-[#1A1A1A] flex items-center gap-2"
                id="view-work-hero-btn"
              >
                <span>Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  soundFX.playPop();
                  onOpenEstimator();
                }}
                className="px-5 py-3.5 bg-[#D23D1F] hover:bg-[#1A1A1A] text-white font-mono text-xs uppercase tracking-widest transition-all border border-[#1A1A1A] flex items-center gap-2"
                id="estimator-hero-btn"
              >
                <Sparkles className="w-4 h-4" />
                <span>Estimate Scope</span>
              </button>

              <button
                onClick={() => {
                  soundFX.playPop();
                  onOpenResume();
                }}
                className="px-4 py-3.5 bg-[#FAF9F6] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] text-[#1A1A1A] border border-[#1A1A1A] font-mono text-xs uppercase tracking-widest flex items-center gap-2 transition-all"
                id="resume-hero-btn"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Quick Stats Grid - Editorial Typography */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1A1A1A]/20">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-serif font-black text-[#1A1A1A] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs">
              <span className="uppercase tracking-widest text-[#1A1A1A]/50 text-[10px]">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 border border-[#1A1A1A] bg-[#FAF9F6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAF9F6] transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Featured Video Showcase Player (Replacing previous photo) */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-between bg-[#1A1A1A] text-white p-6 sm:p-8 border border-[#1A1A1A] relative shadow-2xl">
            
            {/* Top Video Header */}
            <div className="flex items-center justify-between border-b border-white/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D23D1F] animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D23D1F] font-bold">
                  Featured AI Video Presentation
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/70 bg-white/10 px-2 py-0.5 border border-white/20">
                00:50 HD
              </span>
            </div>

            {/* Video Container Box */}
            <div className="my-5 relative aspect-[16/9] w-full border border-white/20 overflow-hidden bg-slate-950 group shadow-2xl">
              
              {/* Background Cover Poster Image when not playing */}
              {!isPlaying && (
                <img
                  src={PERSONAL_INFO.avatar}
                  alt="Saba Hameed - AI SE BRANDING"
                  className="absolute inset-0 w-full h-full object-cover z-0 filter contrast-105"
                />
              )}

              {/* Background Video Element / Fallback Visual Showcase */}
              <video
                ref={videoRef}
                src="/saba_intro_video.mp4"
                poster={PERSONAL_INFO.avatar}
                className={`w-full h-full object-cover filter contrast-105 ${!isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                loop
                muted={isMuted}
                onTimeUpdate={(e) => setCurrentTime(Math.floor(e.currentTarget.currentTime))}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

              {/* Top Left Badge inside Video */}
              <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/30 text-[9px] font-mono uppercase tracking-widest text-white flex items-center gap-1.5 z-10">
                <Clapperboard className="w-3 h-3 text-[#D23D1F]" />
                <span>AI Product Ads & UGC</span>
              </div>

              {/* Top Right Status inside Video */}
              <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#D23D1F] text-[9px] font-mono uppercase tracking-wider text-white font-bold flex items-center gap-1 z-10">
                <CheckCircle2 className="w-3 h-3" />
                <span>Client Approved</span>
              </div>

              {/* Center Big Play Button Overlay */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 bg-[#D23D1F]/90 hover:bg-[#D23D1F] text-white border-2 border-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 z-20 group-hover:scale-105"
                  title="Play Video"
                >
                  <Play className="w-7 h-7 fill-white ml-1" />
                </button>
              )}

              {/* Live Caption Bar inside Video */}
              {showSubtitles && (
                <div className="absolute bottom-12 left-3 right-3 p-2.5 bg-black/85 backdrop-blur-md border border-white/20 rounded text-center z-10 transition-all">
                  <p className="text-xs font-serif italic text-white leading-snug">
                    "{currentCaption.eng}"
                  </p>
                  <p className="text-[11px] font-sans text-white/80 mt-0.5">
                    {currentCaption.urdu}
                  </p>
                </div>
              )}

              {/* Video Bottom Custom Control Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-black/90 border-t border-white/20 p-2.5 flex items-center justify-between text-white text-xs font-mono z-20">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    className="p-1 hover:text-[#D23D1F] transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1 hover:text-[#D23D1F] transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => setShowSubtitles(!showSubtitles)}
                    className={`p-1 transition-colors ${showSubtitles ? 'text-[#D23D1F]' : 'text-white/50'}`}
                    title="Toggle Subtitles"
                  >
                    <Subtitles className="w-4 h-4" />
                  </button>
                  <span className="text-[10px] text-white/70">
                    00:{currentTime < 10 ? `0${currentTime}` : currentTime} / 00:50
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 mx-3 h-1 bg-white/20 rounded overflow-hidden">
                  <div
                    className="h-full bg-[#D23D1F] transition-all duration-300"
                    style={{ width: `${(currentTime / 50) * 100}%` }}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[9px] uppercase tracking-widest text-[#D23D1F] font-bold">
                    {isPlaying ? 'PLAYING' : 'PAUSED'}
                  </span>
                </div>
              </div>

            </div>

            {/* Video Description & Highlights */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#D23D1F]">
                  Saba Hameed — Official Video Intro
                </h3>
                <span className="text-[10px] font-mono text-white/60">UGC & Product Ads</span>
              </div>
              <p className="text-sm font-serif italic text-white/90 leading-relaxed">
                "Learn how AI converts simple product photos into 3D, luxury, and cinematic ad commercials."
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Script → Storyboard → Final Ad', '3D Product Animation', 'AI Luxury Ads', 'UGC Content'].map((badge, bIdx) => (
                  <span key={bIdx} className="text-[9px] font-mono uppercase bg-white/10 border border-white/20 px-2 py-0.5 text-white/80">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Call to Action */}
            <div className="pt-4 mt-4 border-t border-white/20 flex items-center justify-between font-mono text-[11px]">
              <span className="uppercase tracking-widest text-white/70">
                Saba Hameed • AI Product Designer
              </span>
              <button
                onClick={() => {
                  soundFX.playPop();
                  onOpenEstimator();
                }}
                className="px-3 py-1.5 bg-[#D23D1F] hover:bg-white hover:text-[#1A1A1A] text-white font-mono uppercase font-bold text-[10px] tracking-wider transition-colors flex items-center gap-1"
              >
                <span>Request Video Ad</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
