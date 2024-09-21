// pages/index.js

import Head from "next/head";
import VideoUploadComponent from "../components/VideoUploadComponent"; // Import your upload component

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <Head>
        <title>Opus Clone - Video Upload</title>
      </Head>
      
      {/* Header Section */}
      <header className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-center mb-4">1 long video, 10 viral clips. Create 10x faster.</h1>
        <p className="text-center text-lg mb-6">OpusClip turns long videos into shorts, and publishes them to all social platforms in one click. Powered by OpenAI.</p>
      </header>

      {/* Upload Section */}
      <main className="flex flex-col items-center space-y-6">
        <VideoUploadComponent />

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded">
            Get Free Clips
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded">
            Upload File
          </button>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-16">
        <p className="text-sm">Powered by OpenAI</p>
      </footer>
    </div>
  );
}
