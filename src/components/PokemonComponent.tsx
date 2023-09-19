import React, { useEffect, useState } from "react";


const PokemonComp = () => {
    const [compState, setCompState] = useState<any>(null);
    const [pageReady, setPageReady] = useState<any>(false);

    useEffect(() => {
        const componentInit = async () => {
            await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * (500 - 1 + 1) + 1)}`).then(response => response.json()).then(data => setCompState(data));
        setPageReady(true);
        }
        componentInit();
    },[])
    return pageReady && (
        <div>
                <img src={compState.sprites['front_default']} width={200} height={200} alt={compState.id} />
                <span>{compState.name}</span>
            </div>
    )
}

export default PokemonComp;