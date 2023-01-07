import React from "react";
import { StyledRegisterVideo } from "./style";

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false);
    const [values, setValues] = React.useState({ titulo: "", url: "" });

    return (
        <StyledRegisterVideo>
            <button 
                className="add-video" 
                title="Adicionar Vídeo"
                onClick={() => setFormVisivel(true)}
            >
                +
            </button>
            {formVisivel &&
                <form>
                    <div>
                        <button title="Fechar" className="close-modal">x</button>
                        <input placeholder="Título do vídeo" value={values.titulo} />
                        <input placeholder="URL" value={values.url} />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            }
        </StyledRegisterVideo>
    )
}