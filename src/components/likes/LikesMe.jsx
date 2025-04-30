import ProfileCard from "../common/ProfileCard";

const LikesMe = ({ likesMe }) => {
  return (
    <>
      <div className="w-[80%] ps-[50px] pe-[20px] flex flex-col gap-[20px]">
        {likesMe?.map((item) => {
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
export default LikesMe;