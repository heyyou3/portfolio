function! _call_myeslint() abort
  exec ":!docker exec -i `docker ps | perl -anlE 'if(/portfolio_container/){say $F[0]}'` npx eslint --fix ".expand('%')." --config .eslintrc.js"
endfunction

augroup typescript_group
  autocmd!
  autocmd BufWritePost *.ts,*.tsx call _call_myeslint()
augroup END
