export default function Logo({ className = "", logoColor = "bg-blue-700", textColor = "text-white" }: { className?: string, logoColor?: string, textColor?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-10 h-8 ${logoColor} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
        ₣
      </div>
      <span className="font-semibold text-xl text-[#1E293B]">FeeMate</span>
    </div>
  );
}
