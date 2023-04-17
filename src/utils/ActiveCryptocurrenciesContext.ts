import React, { createContext, useContext, useState } from "react";

const ActiveCryptocurrenciesContext = React.createContext([])

export function ActiveCryptocurrenciesProvider({children: any}) {
    const [ActiveCryptocurrencies, setActiveCryptocurrencies] = useState([])

    return (
        <ActiveCryptocurrenciesContext.Provider>
            {children}
        </ActiveCryptocurrenciesContext.Provider>
    )
}