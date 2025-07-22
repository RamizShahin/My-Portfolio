export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="absolute top-0 left-0 w-screen h-screen">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute -bottom-10 -right-20 w-96 h-96 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>{" "}
      </div>
    </div>
  );
}
