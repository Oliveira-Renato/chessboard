import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Icon } from '@iconify/react';


export function Home() {
  useEffect(() => {
    let vChessPiecesBlack: any[] = 
        ['<iconify-icon class="chess-piece" icon="game-icons:chess-rook"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-knight"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-bishop"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-queen"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-king"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-bishop"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-knight"></iconify-icon>',
        '<iconify-icon class="chess-piece" icon="game-icons:chess-bishop"></iconify-icon>'
      ],
        wAlpha:any[] = ["", "a", "b", "c", "d", "e", "f", "g", "h"],
        wChessBoard: any[][][] = [[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7]],[[8]],[[]]],
        vTheadTR: any = document.querySelector("thead tr"), vTbody: any = document.querySelector("tbody"),
        vPawn = '<iconify-icon class="chess-piece" icon="game-icons:chess-pawn"></iconify-icon>';

    //ChessBoard
    wChessBoard.forEach(function (board, idx) {
      if (idx === 0 || idx === 7) {
        vChessPiecesBlack.forEach((chessPiece) => {
          wChessBoard[idx].push(chessPiece);
        });

        if (idx === 7 && (wChessBoard[idx][4] || wChessBoard[idx][5])) {
          console.log(vChessPiecesBlack[4]);
          console.log(vChessPiecesBlack[4]);
          wChessBoard[idx][4] = vChessPiecesBlack[4];
          wChessBoard[idx][5] = vChessPiecesBlack[3];
        }
      } else if (idx === 1 || idx === 6) {
        for (let i = 0; i < 8; i++) {
          wChessBoard[idx].push([vPawn]);
        }
      } else {
        for (let i = 0; i < 8; i++) {
          if((idx % 2 === 0 && i % 2 === 1) || (idx % 2 === 1 && i % 2 === 0)) {
            wChessBoard[idx].push(['<iconify-icon icon="uim:square"></iconify-icon>']);
          } else {
            wChessBoard[idx].push(['<iconify-icon icon="uim:square-full"></iconify-icon>']);
          }
        }
      }
    });

    //Header wAlpha[j]}
    wChessBoard.forEach(function (item, idx) {
      vTheadTR.innerHTML += `<th>${idx}</th>`;
    });

    //Body
    for (let i = 0; i < wChessBoard.length; i++) {
      let tr = document.createElement("tr");
      for (let j = 0; j < wChessBoard[i].length; j++) {
        if (i === 8) {
          tr.innerHTML += `<th>${wAlpha[j]}</th>`;
        } else {
          tr.innerHTML += `<td class="chessboard-square">${wChessBoard[i][j]}</td>`;
        }
      }
      vTbody.append(tr);
    }
  });

  return (
    <div id="chess-main">
      <div className="main-title">
        <h1>Chessboard</h1>
        <span>
          <Icon icon="fa6-solid:chess" />
        </span>
      </div>
      <main>
        <div className="chessboard-container">
          <table>
            <thead>
              <tr></tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr></tr>
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  )
}