import LoadIcon from "@/components/ui/LoadIcon";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex-1 flex justify-center items-center h-screen'>
        <LoadIcon />
    </div>
  )
}
