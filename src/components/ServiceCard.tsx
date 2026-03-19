import { useState} from "react";
import '../styles/services.css';

interface Props {
    heading: string;
    children: string;
    img: string;
}


export default function ServiceCard({ heading, children, img }: Props) {
    const [isOverlay, setIsOverlay] = useState(false);
    const displayText = isOverlay ? children : children.substring(0, 50) + "...";

    function toggleOverlay() {
        setIsOverlay(!isOverlay);
        if (!isOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }

    return (
        <>
            {isOverlay && <div className="overlay-backdrop" onClick={toggleOverlay}></div>}
            <div className={`service-card ${isOverlay ? "overlay" : ""}`}>
                <div className="service-image">
                    <img src={img} alt={heading} />
                </div>
                <div className="service-content">
                    <h3>{heading}</h3>
                    <p>{displayText}</p>
                    <button className="read-more-btn" onClick={toggleOverlay}>
                        {isOverlay ? "CLOSE" : "READ MORE"}
                    </button>
                </div>
            </div>
        </>
    );
}