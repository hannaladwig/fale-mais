import React, { Component } from "react";
import "./style.css";

export default class FaleMais extends Component {
  state = {
    origem: 0,
    destino: 0,
    tempo: 0,
    plano: 0,
    comPlano: 0,
    semPlano: 0
  };

  // componentDidUpdate() {
  //   // this.comPlano();
  // }

  comFaleMais30 = () => {
    const { origem, destino, tempo, plano } = this.state;
    let resultado;
    if (origem === "011" && destino === "016") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (1.9 + 0.1 * 1.9);
      }
    }

    if (origem === "011" && destino === "017") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (1.7 + 0.1 * 1.7);
      }
    }

    if (origem === "011" && destino === "018") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (0.9 + 0.1 * 0.9);
      }
    }

    if (origem === "016" && destino === "011") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (2.9 + 0.1 * 2.9);
      }
    }

    if (origem === "017" && destino === "011") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (2.7 + 0.1 * 2.7);
      }
    }

    if (origem === "018" && destino === "011") {
      if (tempo > 30 && plano === "30") {
        resultado = (tempo - 30) * (1.9 + 0.1 * 1.9);
      }
    }

    this.setState({ comPlano: resultado });
  };

  comFaleMais60 = () => {
    const { origem, destino, tempo, plano } = this.state;
    let resultado;
    if (origem === "011" && destino === "016") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (1.9 + 0.1 * 1.9);
      }
    }

    if (origem === "011" && destino === "017") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (1.7 + 0.1 * 1.7);
      }
    }

    if (origem === "011" && destino === "018") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (0.9 + 0.1 * 0.9);
      }
    }

    if (origem === "016" && destino === "011") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (2.9 + 0.1 * 2.9);
      }
    }

    if (origem === "017" && destino === "011") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (2.7 + 0.1 * 2.7);
      }
    }

    if (origem === "018" && destino === "011") {
      if (tempo > 60 && plano === "60") {
        resultado = (tempo - 60) * (1.9 + 0.1 * 1.9);
      }
    }

    this.setState({ comPlano: resultado });
  };

  comFaleMais120 = () => {
    const { origem, destino, tempo, plano } = this.state;
    let resultado;
    if (origem === "011" && destino === "016") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (1.9 + 0.1 * 1.9);
      }
    }

    if (origem === "011" && destino === "017") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (1.7 + 0.1 * 1.7);
      }
    }

    if (origem === "011" && destino === "018") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (0.9 + 0.1 * 0.9);
      }
    }

    if (origem === "016" && destino === "011") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (2.9 + 0.1 * 2.9);
      }
    }

    if (origem === "017" && destino === "011") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (2.7 + 0.1 * 2.7);
      }
    }

    if (origem === "018" && destino === "011") {
      if (tempo > 120 && plano === "120") {
        resultado = (tempo - 120) * (1.9 + 0.1 * 1.9);
      }
    }

    this.setState({ comPlano: resultado });
  };

  semFaleMais = () => {
    const { origem, destino, tempo, plano } = this.state;
    let resultado;
    if (origem === "011" && destino === "016") {
      resultado = tempo * 1.9;
    }

    if (origem === "011" && destino === "017") {
      resultado = tempo * 1.7;
    }

    if (origem === "011" && destino === "018") {
      resultado = tempo * 0.9;
    }

    if (origem === "016" && destino === "011") {
      resultado = tempo * 2.9;
    }

    if (origem === "017" && destino === "011") {
      resultado = tempo * 2.7;
    }

    if (origem === "018" && destino === "011") {
      resultado = tempo * 1.9;
    }

    this.setState({ semPlano: resultado });
  };

  call = () => {
    // this.comFaleMais30();
    const { plano } = this.state;
    if (plano === "30") {
      this.comFaleMais30();
    } else if (plano === "60") {
      this.comFaleMais60();
    } else if (plano === "120") {
      this.comFaleMais120();
    }

    this.semFaleMais();
  };

  render() {
    return (
      <div className="container">
        <div className="origem">
          <label>Origem:</label>
          <select
            name="origem"
            onChange={event => {
              this.setState({ origem: event.target.value });
            }}
          >
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
        </div>

        <div className="destino">
          <label>Destino:</label>
          <select
            name="destino"
            onChange={event => {
              this.setState({ destino: event.target.value });
            }}
          >
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
        </div>

        <div className="tempo">
          <label>Tempo:</label>
          <input
            className="tempo"
            type="number"
            onChange={event => {
              this.setState({ tempo: event.target.value });
            }}
          />
        </div>

        <div className="plano">
          <label>Escolha o plano</label>
          <select
            className="plano"
            onChange={event => {
              this.setState({ plano: event.target.value });
            }}
          >
            <option value="30"> FaleMais 30</option>
            <option value="60"> FaleMais 60</option>
            <option value="120"> FaleMais 120</option>
          </select>
        </div>

        <div className="bottom">
          <p>Com FaleMais: {this.state.comPlano}</p>
          <p>Sem FaleMais: {this.state.semPlano}</p>
          <button onClick={this.call}>conta</button>
        </div>
      </div>
    );
  }
}
