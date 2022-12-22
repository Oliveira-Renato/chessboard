import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Icon, IconifyIcon } from '@iconify/react';


export function Home() {
  const hanldeWhiteAndBlack = () => {
    let vChessPieces = document.querySelectorAll('.chess-piece')

    for (let index = 0; index < vChessPieces.length ; index++) {
      if(index < (vChessPieces.length / 2)) {
        vChessPieces[index].classList.add('chess-piece-white')
      }
    }
  }

  useEffect(() => {
    let vChessPiecesBlack: any[] = 
        ['<iconify-icon class="chess-piece" data-piece-name="rook" data-eixo-x="a" data-eixo-y data-letter icon="game-icons:chess-rook"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="knight" data-eixo-x="b" data-eixo-y data-letter icon="game-icons:chess-knight"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="bishop" data-eixo-x="c" data-eixo-y data-letter icon="game-icons:chess-bishop"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="queen" data-eixo-x="d" data-eixo-y data-letter icon="game-icons:chess-queen"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="king" data-eixo-x="c" data-eixo-y data-letter icon="game-icons:chess-king"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="bishop" data-eixo-x="f" data-eixo-y data-letter icon="game-icons:chess-bishop"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="knight" data-eixo-x="g" data-eixo-y data-letter icon="game-icons:chess-knight"></iconify-icon>',
        '<iconify-icon class="chess-piece" data-piece-name="rook" data-eixo-x="h" data-eixo-y data-letter icon="game-icons:chess-rook"></iconify-icon>'
      ],
        wAlpha:any[] = ["", "a", "b", "c", "d", "e", "f", "g", "h"],
        wChessBoard: any[][][] = [
          [['<strong>8</strong>']],
          [['<strong>7</strong>']],
          [['<strong>6</strong>']],
          [['<strong>5</strong>']],
          [['<strong>4</strong>']],
          [['<strong>3</strong>']],
          [['<strong>2</strong>']],
          [['<strong>1</strong>']],[[]]],
        vTheadTR: any = document.querySelector("thead tr"), vTbody: any = document.querySelector("tbody"),
        vPawn = '<iconify-icon class="chess-piece pawn" data-piece-name data-eixo-x data-eixo-y data-letter icon="game-icons:chess-pawn" ></iconify-icon>';

    //ChessBoard
    wChessBoard.forEach(function (board, idx) {
      if (idx === 0 || idx === 7) {
        vChessPiecesBlack.forEach((chessPiece) => {
          console.log(chessPiece)
          wChessBoard[idx].push(chessPiece.replace('data-eixo-y','data-eixo-y=' + (8 - idx)));// 8(number of pieces) minus the index number
        });

        if (idx === 7 && (wChessBoard[idx][4] || wChessBoard[idx][5])) {
          console.log('here', vChessPiecesBlack[4] )
          wChessBoard[idx][4] = vChessPiecesBlack[4].replace('data-eixo-x="c"','data-eixo-x="d"');
          wChessBoard[idx][5] = vChessPiecesBlack[3].replace('data-eixo-x="d"','data-eixo-x="e"');
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
    hanldeWhiteAndBlack()
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