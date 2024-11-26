# Named & Aggregate Exports in Node.js:

## Key Takeaways
- Avoid mixing``` modules.exports``` and ```exports.property``` incorrectly. If you reassign ```module.exports```, it will override and previous ```exports.property``` assignment.

- Use consistent syntax for clarity:
    
    - Assign everything at once with ```module.exports = {...}```.
    - Or assign properties individually with ```module.exports.property.```