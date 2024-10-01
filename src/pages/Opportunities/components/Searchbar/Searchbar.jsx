import "./styles.scss";

const Searchbar = ({ filterParameters, setFilterParameters }) => {
    const handleChange = (e) => {
        setFilterParameters((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <div className="searchbar">
                <div className="smallContainers">
                    <label htmlFor="tipo">Tipo</label>
                    <select
                        name="type"
                        id="tipo"
                        value={filterParameters.type}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" disabled defaultValue>
                            Selecione uma opção
                        </option>
                        <option value="">Sem opção</option>
                        <option value="casa">Casa</option>
                        <option value="quarto">Quarto</option>
                    </select>
                </div>
                <div className="smallContainers">
                    <label htmlFor="tipologia">Tipologia</label>
                    <select
                        name="typology"
                        id="tipologia"
                        value={filterParameters.typology}
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="" disabled defaultValue>
                            Selecione uma opção
                        </option>
                        <option value="">Sem opção</option>
                        <option value="t0">T0</option>
                        <option value="t1">T1</option>
                        <option value="t2">T2</option>
                        <option value="t3">T3</option>
                        <option value="t4">T4</option>
                        <option value="t5">T5</option>
                        <option value="t6 ou superior">T6 ou superior</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Searchbar;