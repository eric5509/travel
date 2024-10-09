export default function ProgressCard() {
  return (
    <div className="absolute bottom-20 p-4 w-80 rounded-3xl rounded-br-none shadow-black border-2 border-blue-600 shadow-md bg-white flex gap-4 -right-16">
        <div className="h-14 border-2 border-blue-600 w-14 rounded-full relative">
          <img src="https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/9b581be07be0139fef19c40437a9c32c.jpg" className="w-full h-full object-cover top-0 left-0 absolute rounded-full"  alt="" />
        </div>
        <div className="text-sm">
            <p className="text-green-500">Ongoing</p>
            <p className="font-semibold text-base mt-0.5">Trip to Rome</p>
            <div className="mt-2">
                <p><span className="text-blue-600 font-semibold">40%</span> Completed</p>
                <div className="h-1.5 w-full mt-1 rounded-full bg-gray-300">
                    <div className="w-1/2 h-full bg-blue-600 rounded-full"></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
