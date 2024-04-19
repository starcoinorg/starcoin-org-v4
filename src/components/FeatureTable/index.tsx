import React from "react";
import "./FeatureTable.css";

export default function FeatureTable() {
  return (
    <div className="card--table">
      <div className="table--feature">
        <div className="row row__title">
          <div className="column">Feature</div>
          <div className="column">Starcoin 1.0 (Excluding DAG)</div>
          <div className="column">Starcoin 2.0 (Incorporating DAG)</div>
        </div>

        <div className="row row__content">
          <div className="column">Structure</div>
          <div className="column">
            Comprises a linear, sequential chain of blocks.
          </div>
          <div className="column">
            Combines a DAG with multiple subnets and blockchains for its
            consensus layer.
          </div>
        </div>

        <div className="row row__content">
          <div className="column">Consensus Mechanism</div>
          <div className="column">
            -Proof of Work (PoW) <br />
            -An enhance version of Nakamoto Consensus
          </div>
          <div className="column">
            -Proof of Work (PoW) <br />
            -An enhance version of Nakamoto Consensus combined with FlexiDAG
          </div>
        </div>

        <div className="row row__content">
          <div className="column">Scalability</div>
          <div className="column">
            Constrained by block size and block creation time, potentially
            causing bottlenecks.
          </div>
          <div className="column">
            Offers high scalability and throughput due to parallel transaction
            processing.
          </div>
        </div>

        <div className="row row__content">
          <div className="column">Transaction Throughput</div>
          <div className="column">
            Lower, as blocks are processed sequentially, about 1,000 TXs /
            seconds.
          </div>
          <div className="column">
            Remarkably higher, thanks to the parallel processing of transactions
            10 -20x faster.
          </div>
        </div>

        <div className="row row__content">
          <div className="column">Transaction Parallel Execution</div>
          <div className="column">No</div>
          <div className="column">
            Yes. Transactions are organized into blocks, increasing throughput
            by 10 times through the use of TurboSTM.
          </div>
        </div>
      </div>
    </div>
  );
}
