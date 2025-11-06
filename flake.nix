{
  description = "Proj_2";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {nixpkgs, ...}: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodePackages.live-server
        yarn2nix
	yarn
        vscode-langservers-extracted
        typescript-language-server
      ];

      shellHook = ''
        echo "JS ENV Loaded."
      '';
    };
  };
}
