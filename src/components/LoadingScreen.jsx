function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-amber-500 border-solid mb-6"></div>
      <p className="text-xl text-amber-500 font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
}

export default LoadingScreen;
