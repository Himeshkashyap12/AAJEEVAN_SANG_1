import ProfileCard from "../common/ProfileCard";

const MyLikes = ({ myLikes }) => {
  return (
    <>
      <div className="w-[80%] ps-[50px] pe-[20px] flex flex-col gap-[20px]">
        {myLikes?.map((item) => {
          return (
            <>
              <ProfileCard />
            </>
          )
        })}
      </div>
    </>
  )
}
export default MyLikes;