
interface LandingBoxProps {
    title: string,
    details: string,
    imageSrc: string,
    imageCaption: string
}

const LandingBox: React.FC<LandingBoxProps> = ({ title, details, imageSrc, imageCaption }) => {

    return (
        <div className="h-fit w-screen pb-10 bg-tan">

            <div className="grid grid-cols-7 flex items-center gap-5 py-5">
                <div className="col-span-3 col-start-2 ">
                    <span className="text-gold text-2xl md:text-5xl">{title}</span>
                    <p className="mt-3 md:text-lg">{details}</p>
                </div>

                <div className="col-span-2 flex flex-col">
                    <img className="text-lg md:text-3xl rounded-4xl mt-auto" src={`${imageSrc}`}></img>
                    <span className="mx-auto">{imageCaption}</span>
                </div>
            </div>
        </div>
    );

}





export default LandingBox;