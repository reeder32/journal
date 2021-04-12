import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './entry.js';



$("#submit-button").on("click", function (event) {
  const journalEntry = $("#body").val();
  let entry = new Entry("Test", journalEntry);
  console.log(entry);
  let teaser = entry.getTeaser();
  console.log(teaser);
  event.preventDefault();
});



