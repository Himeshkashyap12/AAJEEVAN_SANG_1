import CustomSlider from "../../CustomSlider";
import CustomText from "../../CustomText";
import EditColoummn from "../../EditColumn";
import profile1 from "../../../../assets/profile/insta1.png"
import "./profile.css"
const Personal = () => {
  const profileData = [
        { img: profile1 },
        { img: profile1 },
        { img: profile1 },
        { img: profile1 },
      ];
  return (
    <>
      <div className="personal">
        <div
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="py-2 rounded-full w-[140px] flex justify-center items-center"
        >
          <CustomText text={"3. PERSONAL"} />
        </div>
        <div className="ps-[140px]">
          <CustomText
            className={"!text-[18px] font-[400] !text-[#201913]"}
            text={"Basic & Personal Information"}
          />
          <div className="flex flex-col gap-[10px] py-[12px]">
            <EditColoummn label={"Age"} data={"25 Years"} />
            <EditColoummn label={"Height"} data={"5’2”"} />
            <EditColoummn label={"Weight"} data={"60 Kg"} />
            <EditColoummn label={"Date of Birth"} data={"1 Jan, 2000"} />
            <EditColoummn label={"Education"} data={"B.Tech”    |   IIT P"} />
            <EditColoummn
              label={"Profession"}
              data={"Manager    |    Private"}
            />
            <EditColoummn label={"Religion"} data={"Hindu | Khatri"} />
            <EditColoummn label={"Profile managed By"} data={"Parents"} />
            <EditColoummn label={"Marital Status"} data={"Never Married"} />
            <EditColoummn label={"Lives In"} data={"Lucknow, UP"} />
            <EditColoummn label={"Annual Income"} data={"3-4 LPA"} />
          </div>
          <div>
            <CustomText
              className={"!text-[14px] font-[500]"}
              text={"Instagram"}
            />
            <div className="max-w-[1200px] py-[24px] personal">
              <CustomSlider
                slides={profileData}
                SlideDataCount={3}
                className={"!h-[300px] !w-[300px] rounded-xl"}
                centerMode={true}
                dots={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Personal;
