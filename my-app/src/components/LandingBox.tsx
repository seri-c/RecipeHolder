
interface LandingBoxProps {
    title: string,
    details: string,
    imageSrc: string,
    imageCaption: string
}

const LandingBox: React.FC<LandingBoxProps> = ({ title, details, imageSrc, imageCaption }) => {

    return (
        <div className="h-100 bg-tan">

            <div className="w-5xl m-auto flex gap-20 py-5">
                <div className="mt-20">
                    <span className="text-gold text-5xl">{title}</span>
                    <p className="w-2xl mt-3 text-lg">{details}</p>
                </div>

                <div>
                    <img className="w-60 text-3xl rounded-4xl" src={`${imageSrc}`}></img>
                    <span>{imageCaption}</span>
                </div>
            </div>
        </div>
    );

}





export default LandingBox;