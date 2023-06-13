import Navigation from "@/components/Navigation";
import MailCard from "@/components/MailCard";
import MailReceiveCard from "@/components/MailReceiveCard";

function Home() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-700 h-screen text-slate-100 font-mono">
      <Navigation />
      <div className="h-1 border-b border-b-slate-500/30 w-screen shadow-2xl" />
      <MailCard />
      <MailReceiveCard />
    </div>
  );
}

export default Home;
