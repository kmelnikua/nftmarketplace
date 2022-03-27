
import InternetOfArt from '../../videos/internet-of-art.bc99cd34.mp4';
import ReactPlayer from 'react-player';
import SpaceVideo from '../../videos/spaces.e52ffe13.mp4';
export const VideoComponent= ()=>{
        return(
        <div className="container-fluid">
            <div className="container">
                <div className="row mt-5 --bs-gutter-x pb-5">
                    <div className="col-md-7 me-auto   ">
                       <ReactPlayer url={InternetOfArt} loop playsinline muted playing/>
                    </div>
                    <div className="col-md-5 mt-5 subscription" id="hero">
                        <span className="fs-1 DM-Sans headline main-header-color fw-bold">The SuperRare DAO: powered by community
                        </span>
                        <p className="Mulish mt-4 col-md-9 fs-5">
                            A new DAO comprised of $RARE token holders will help define the future of art and culture for a digitally native generation. Membership in the SuperRare DAO allows you to curate the platform, control marketplace parameters, and add your voice to one of
                            the most ambitious art projects in the world today.
                        </p>




                    </div>

                </div>
                <div className="row mt-5 --bs-gutter-y pb-5">
                    <div className="col-md-5 mt-5 subscription hero">
                        <span className="fs-1 DM-Sans headline main-header-color fw-bold">A next generation NFT Platform
                        </span>
                        <p className="Mulish mt-4 col-md-9 fs-5">
                            CryptoArt to date has evolved around centrally curated platforms with a single minting contract. While this was an important step in the evolution of the industry, we're excited to usher in a new era that empowers more diverse curatorial voices. SuperRare
                            Spaces are independently curated storefronts designed to help promote artists and create a diverse art ecosystem. Each Space is vetted and elected by the SuperRare community.
                        </p>



                    </div>
                    <div className="col-md-7 d-flex justify-content-center">
                    <ReactPlayer url={SpaceVideo} loop playsinline muted playing/>
                    </div>


                </div>
            </div>
        </div>);
}