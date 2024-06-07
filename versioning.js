// NodeJS Tutorial - Versioning - https://www.youtube.com/watch?v=LuV5upokyBY&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=54&pp=iAQB

/*                  *********More Important one - Don't hesitate it********
Versioning:

    Semantic Versioning:
        - SemVer is one of the most widely adopted versioning systems.
        - A simple set of rules and requirements that dictate how version numbers are assigned and incremented.
        - Version numbers and the way they change convey meaning about the underlying code and what has been
          modified from one version to the next.
        - For Ex: Version 1.0.2 where 1 is Major version, 0 is Minor version and 2 is Patch version.
    
    Versioning Rules:
        - When you fix a bug and the code stays backward-compatible you increment the patch version.
          For Ex: 1.1.1 to 1.1.2
        - When you add new functionality but the code still stays backwards-compatible, you increment
          the minor version.  You also reset the patch version to zero.
          For Ex: 1.1.1 to 1.2.0
        - When you make changes and the code is no more backwards compatible, you increment the major version.
          you have to reset the minor and patch version to zero.
          For Ex: 1.1.1 to 2.0.0

          What is backward-compatible?
            - Backward compatibility (or backward-compatible) refers to the ability of a system, software, or 
              component to interact with and support older versions of itself or other systems without causing 
              issues or requiring changes to the existing infrastructure. In other words, backward-compatible 
              changes ensure that new versions of a software application or API do not break or disrupt 
              the functionality of older versions.
            - Backward compatibility ensures that newer versions of software can coexist with older versions 
              without causing disruptions. This is crucial for maintaining a stable and reliable environment, 
              especially in scenarios where multiple versions of software components interact with each other.

        - Semantic versioning always start with 0.1.0
        - 0.Y.Z( a major version of zero) is used for initial development.
        - When the code is production-ready, you increment to version 1.0.0
        - Even the simplest of changes has to be done with an increase in the version number.

*/






