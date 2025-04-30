import ProfileCard from "../common/ProfileCard";

const SelectedDiscover=({allSelected})=>{
    return(
        <>
             <div className="w-[80%] ps-[50px] pe-[20px] flex flex-col gap-[20px]">


        {allSelected?.map((item)=>{
            return(
                <>
                  <ProfileCard />
                </>
            )
        })}
          </div>
        </>
    )
}
export default SelectedDiscover;