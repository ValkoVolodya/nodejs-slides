for(i = 2; i < process.argv.length; i++){
  process.stdout.write(process.argv[i]);
  process.stdout.write(" ");
}
process.stdout.write('\n');
