import Link from "next/link";
import fetchAllTrails from "../../../utilities/fetchAllTrails";
import axios from "axios";
import Searchbar from "../../../components/Searchbar";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import CardTrailOverview from "../../../components/CardTrailOverview";
const article = ({ trail }) => {
  console.log(trail);
  //console.log(trail);
  //console.log(article);
  return (
    <>
      <div className="flex justify-center mt-5 w-full">
        <div className="bg-slate-50 w-[950px]">
          <div className="flex justify-between p-5">
            <div>
              <Breadcrumbs />
            </div>
            <div>
              <Searchbar />
            </div>
          </div>
          <div className="p-5 w-full border-2 border-indigo-600">
            <div className="min-h-[250px] w-full flex flex-col items-center gap-5">
              <div className="flex justify-evenly w-full gap-5 border-2 border-red-600">
                <div className="w-full p-5 border-2 border-red-600 bg-red-50">
                  <CardTrailOverview data={trail} />
                </div>
                <div className="w-full p-5 border-2 border-red-600 bg-red-50">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                  et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                  enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                  aut fugit, sed quia consequuntur magni dolores eos qui ratione
                  voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem ullam corporis
                  suscipit laboriosam, nisi ut aliquid ex ea commodi
                  consequatur? Quis autem vel eum iure reprehenderit qui in ea
                  voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </div>
              </div>

              <div className="border-2 w-full p-5 border-2 border-red-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>

              <div className="border-2 w-full p-5 border-2 border-red-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await axios.get(
    `http://localhost:1337/api/trails?filters[slug][$eq]=${context.params.trailSlug}&populate=%2A`
  );

  const trail = await data.data[0];

  return {
    props: {
      trail,
    },
  };
};
export const getStaticPaths = async () => {
  const allTrailsArray = await fetchAllTrails();

  const paths = allTrailsArray.data.trails.map((trail) => ({
    params: {
      state: trail.attributes.state.data.attributes.name
        .toLowerCase()
        .toString(),
      trailSlug: trail.attributes.slug.toLowerCase().toString(),
    },
  }));

  console.log(paths);
  return {
    paths: paths,
    fallback: false,
  };
};

export default article;

//paths object needs to look like this:     paths: {params: {id: "1", id: "2"}}
