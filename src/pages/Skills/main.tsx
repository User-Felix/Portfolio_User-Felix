import Toolbar from "../../components/toollbar/toolbar";
import { Link } from "react-router-dom";

import './skills.css'

export default function Skills(): React.ReactElement {
    return(
        <>
            <Toolbar/>
            <main id="container-skills">
                <div id="card-vercel">
                    <div id="button-div">
                        <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Raposa-Dev">
                            My Github
                        </Link>
                    </div>
                    <div id="separate">
                        <img height = "220em" src = "https://github-readme-stats.vercel.app/api?username=User-Felix&show_icons=true&theme=synthwave&include_all_commits=true&count_private=true" />
                        <div id='content-skills'>
                            <img height = "220em" src = "https://github-readme-stats.vercel.app/api/top-langs/?username=User-Felix&theme=synthwave" />
                            <img height = "220em" src = "https://github-readme-stats.vercel.app/api/top-langs/?username=Raposa-Dev&theme=synthwave" />
                        </div>
                    </div>   
                </div>
            </main>
        </>
    )
}