import React from 'react';
import Link from 'next/link';
import { BiLeftArrowCircle } from 'react-icons/bi';
import Navbar from '@/components/Navbar';
function Aboutme() {
  return (
    <div className=" container my-24 px-6 mx-auto">
      <Navbar />
      <Link href="/">
        <div className=" text-stone-900 hover:text-stone-600  cursor-pointer ">
          <h4 className="relative flex gap-1   text-stone-900 hover:text-stone-600 text-lg font-bold md:right-20 lg:right-20  right-15 bottom-16 ">
            <BiLeftArrowCircle className="content-center justify-items-center justify-center top-1.5 relative" />
            Go back
          </h4>
        </div>
      </Link>
      <h3 className="text-4xl animate__animated animate__fadeInDown font-bold text-stone-800 md:text-5xl  pb-5 mb-5 lg:pb-10 text-center  ">
        About me
      </h3>
      <div>
        <div className="container md:px-18 px-4  pl-10">
          <p>
            Zombie ipsum reversus ab viral inferno nam, rick bursting caeruleum
            feeding imo walking, virus z? brains terrore braaaiiiins. Quaeritis
            horum spargit dentevil ferae corpora survival flesh enim, kingdead
            twenty-eight et impetum Congress infect virus maleficia? vel, gelida
            et Finis missing viventium supersumus morbo. Yof dictum dark haec
            dentevil Poenitentiam, mortuos decay sentit Raimi horror spargit,.
          </p>
          <br />
          <p>
            Zombie ipsum reversus ab viral inferno nam, rick bursting caeruleum
            feeding imo walking, virus z? brains terrore braaaiiiins. Quaeritis
            horum spargit dentevil ferae corpora survival flesh enim, kingdead
            twenty-eight et impetum Congress infect virus maleficia? vel, gelida
            et Finis missing viventium supersumus morbo. Yof dictum dark haec
            dentevil Poenitentiam, mortuos decay sentit Raimi horror spargit,
            aliorum maggots hway sunt. Zeder undead shotgun dolor zomby resi
            Terror, attonitos serpens cemetery caule voodoo decaying magna, et
            oculos tremor nobis ambulabunt putrid. Canum sed morbo unleashed
            vivos copia sunt horrifying portenta ut cemetery contagium The,
            sicut ulnis sint four fascinati ingdead carnis legionis iam guts in
            superesse, sicut haec nostra carne Nihil lumbering bello vel
            deadgurl historiarum brucks. Four implent go tattered ferae rotting
            zom shaun cemetery sentit, oculis horror terram zombie Ut left The
            qui, In max sociopathic caro Sicut slack-jawed twenty-eight feeding.
          </p>
          <p>
            Zombie ipsum reversus ab viral inferno nam, rick bursting caeruleum
            feeding imo walking, virus z? brains terrore braaaiiiins. Quaeritis
            horum spargit dentevil ferae corpora survival flesh enim, kingdead
            twenty-eight et impetum Congress infect virus maleficia? vel, gelida
            et Finis missing viventium supersumus morbo. Yof dictum dark haec
            dentevil Poenitentiam, mortuos decay sentit Raimi horror spargit,.
          </p>
          <br />
          <p>
            Zombie ipsum reversus ab viral inferno nam, rick bursting caeruleum
            feeding imo walking, virus z? brains terrore braaaiiiins. Quaeritis
            horum spargit dentevil ferae corpora survival flesh enim, kingdead
            twenty-eight et impetum Congress infect virus maleficia? vel, gelida
            et Finis missing viventium supersumus morbo. Yof dictum dark haec
            dentevil Poenitentiam, mortuos decay sentit Raimi horror spargit,
            aliorum maggots hway sunt. Zeder undead shotgun dolor zomby resi
            Terror, attonitos serpens cemetery caule voodoo decaying magna, et
            oculos tremor nobis ambulabunt putrid. Canum sed morbo unleashed
            vivos copia sunt horrifying portenta ut cemetery contagium The,
            sicut ulnis sint four fascinati ingdead carnis legionis iam guts in
            superesse, sicut haec nostra carne Nihil lumbering bello vel
            deadgurl historiarum brucks. Four implent go tattered ferae rotting
            zom shaun cemetery sentit, oculis horror terram zombie Ut left The
            qui, In max sociopathic caro Sicut slack-jawed twenty-eight feeding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
