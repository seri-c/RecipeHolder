
interface LandingBoxProps {
    title: string,
    details: string,
    imageSrc: string,
    imageCaption: string
}

const LandingBox: React.FC<LandingBoxProps> = ({ title, details, imageSrc, imageCaption }) => {

    return (
        <div className="h-100 bg-tan">

            <div className="w-5xl m-auto">
                <h3>{title}</h3>
                <p>{details}</p>
                <img src={imageSrc}></img>
                <span>{imageCaption}</span>
            </div>
        </div>
    );

}





export default LandingBox;